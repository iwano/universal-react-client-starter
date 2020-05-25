/// <reference path="../../node_modules/electron/electron.d.ts" />

interface Window {
	ipc: Electron.IpcRenderer
}
 
declare let __IS_ELECTRON__: boolean
