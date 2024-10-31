import { app, BrowserWindow, screen, ipcMain, dialog, Menu } from 'electron';
import path from 'path';
import fs from 'fs';

import createCustomMenu from './electron/customMenu';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

app.setName('Titan');

const createWindow = () => {
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width: screenWidth, height: screenHeight } = primaryDisplay.workAreaSize;

  const maxWidth = 1440;
  const maxHeight = 900;

  const windowWidth = Math.min(screenWidth, maxWidth);
  const windowHeight = Math.min(screenHeight, maxHeight);

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Attach menu
  const menu = createCustomMenu(mainWindow);
  // TODO: Hotkeys and menus should probably be one cohesive sprint
  // Menu.setApplicationMenu(menu);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

/*
  =================================
  CUSTOM HANDLERS FOR OS OPERATIONS
  =================================
*/
ipcMain.handle('select-file', async () => {
  const result = await dialog.showOpenDialog({
    properties: ['openFile'],
    filters: [{ name: 'Jupyter Notebooks', extensions: ['ipynb'] }],
  });
  return result.canceled ? null : result.filePaths[0];
});

ipcMain.handle('open-notebook-file', async (event, filePath: string) => {
  try {
    console.log("Received file path:", filePath);
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);  // Return the JSON data to the renderer
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
});
/*
  ===================
  END CUSTOM HANDLERS
  ===================
*/