import React from 'react'
import Routes from './Routes'
import { Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor: '#5d8edd'}}> 
        <Link to="/"><img src="https://images.ecosia.org/ubpJniB-O3oJ5qH4xaDd9jcdeEk=/0x390/smart/https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Fhouse-xxl.png" width="30" alt=""/></Link>
      </nav>
      <Routes />
    </div>
  )
}

export default App