import React from 'react'

import styles from './HomePage.scss'
import logo from '../../assets/react-logo.svg'

const HomePage: React.FC = () => (
    <div className={styles.homePage}>
        <header>
            <img src={logo} alt="react-logo" />
            <h1>Electron-React Template</h1>
        </header>
        <p>
            Hello there, I'm just a template.
            <br />
            Please change me.
        </p>
    </div>
)

export default HomePage
