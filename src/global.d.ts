export {};

declare global {
  interface Window {
    electron: {
      selectFile: () => Promise<string | null>;
      openNotebookFile: (filePath: string) => Promise<any>;
    };
  }
}