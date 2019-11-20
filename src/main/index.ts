import { app, BrowserWindow } from 'electron'
import path, { dirname } from 'path'

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: path.join(__dirname, './assets/icon.svg')
    })

    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
    mainWindow.on('closed', () => { mainWindow = null })
    mainWindow.loadURL(process.env.NODE_ENV === 'development'
        ? 'http://localhost:8080'
        : `file://${path.join(__dirname, '../renderer/index.html')}`
    )
}

app.on('ready', createWindow)
app.on('activate', () => { if (mainWindow === null) createWindow() })

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
