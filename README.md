# Electron-React App Template

Electron-React simple template using:
- [Electron](https://electronjs.org/)
- [React](https://reactjs.org/)
- [Webpack](https://webpack.js.org/) handling *main process* and *renderer* separatly.
- [Typescript](https://www.typescriptlang.org/) for all the code.

<br/>
<div align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png" height="90"/>
    <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="90"/>
    <img src="https://cdn.worldvectorlogo.com/logos/webpack.svg" height="90"/>
    <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" height="90"/>
</div>

---

## Quick start

Install and setup:
```
git clone https://github.com/AGenson/electron-react-webpack-ts.git
cd electron-react-webpack-ts
yarn
```

Run in production mode:
```
yarn run build
yarn start
```

Run in development mode
```
yarn run dev
```

## Project Structure

#### Renderer

The *renderer* is the **React** code in `src/renderer` folder.
You can start editing the `App.tsx` in `src/renderer/components`.

The *renderer* can be run independently in both development or production.

#### Running development

Contrary to the *renderer*, the *main process* needs the *renderer* running.
Same dependence in production, electron needs the *renderer* to be built.

There are two sub-scripts in devolpment mode:
- `main:dev-build`: use **Webpack** in *watch mode* to transpile the code
- `main:dev-watch`:
  - wait for the first build from **Webpack**
  - then launch **nodemon** on webpack's output to relaunch **Electron**'s instance