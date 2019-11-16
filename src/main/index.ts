import { app, BrowserWindow } from 'electron'
import path from 'path'
import fs from 'fs'

const devURL: string = 'http://localhost:8080'
const prodURL: string = path.resolve(app.getAppPath(), '../renderer/index.html')
let URL: string

if (process.env.NODE_ENV === 'development') URL = devURL
else {
    if (fs.existsSync(prodURL)) URL = prodURL
    else {
        app.quit()
        throw new Error('Renderer build missing')
    }
}

let mainWindow: BrowserWindow | null = null

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })

    process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
    mainWindow.on('closed', () => { mainWindow = null })
    mainWindow.loadURL(URL)
}

app.on('ready', createWindow)
app.on('activate', () => { if (mainWindow === null) createWindow() })

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })
