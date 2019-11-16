import { app, BrowserWindow } from 'electron'
import * as path from 'path'

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
    mainWindow.on('closed', () => { mainWindow = null })
    mainWindow.loadURL(process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080'
        : path.resolve(app.getAppPath(), '../renderer/index.html')
    )
}

app.on('ready', createWindow)
app.on('activate', () => { if (mainWindow === null) createWindow() })

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
