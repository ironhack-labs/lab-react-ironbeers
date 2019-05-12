import React from 'react'
import './App.css'
import Routes from './Routes'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faHome)

function App() {
  return (
    <div>
      <Routes />
    </div>
  )
}

export default App
