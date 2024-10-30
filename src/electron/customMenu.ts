import { Menu, MenuItem } from "electron";

const createCustomMenu = (mainWindow: any) => {
    const menu = Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Open',
                    accelerator: 'Cmd+O',
                    click: () => {
                        mainWindow.webContents.send('on-open-file-cmd');
                    },
                },
                {
                    type: 'separator'   
                },
                {
                    label: 'Quit',
                    role: 'quit',
                },
            ]
        }
    ])
    
    return menu;
}

export default createCustomMenu;