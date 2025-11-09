import { contextBridge, ipcRenderer } from 'electron';

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electronAPI', {
  readFile: (filePath: string): Promise<string> => 
    ipcRenderer.invoke('read-file', filePath),
  
  writeFile: (filePath: string, content: string): Promise<void> => 
    ipcRenderer.invoke('write-file', filePath, content)
});
