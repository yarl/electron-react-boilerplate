import { dialog, ipcMain, OpenDialogOptions } from 'electron';

const setupHandlers = (): void => {
  ipcMain.handle('show-open-dialog', async (event, props: OpenDialogOptions) => {
    return dialog.showOpenDialog({
      title: 'Select files or directory',
      buttonLabel: 'Select',
      properties: ['openFile', 'openDirectory', 'multiSelections'],
      ...props,
    });
  });
};

export default setupHandlers;
