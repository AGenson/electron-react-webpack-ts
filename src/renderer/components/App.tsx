import React from 'react'
import './App.scss'

import HomePage from './home-page/HomePage'

// Should contain only Providers/HOCs
// wrapping a Page/Routes component
const App: React.FC = () => (
    <div id="app">
        <HomePage />
    </div>
)

export default App
