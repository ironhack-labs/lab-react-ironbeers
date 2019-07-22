import React from 'react'

import './App.css'
import Router from './Router'
import ContextProvider from './Context'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router />
      </ContextProvider>
    </div>
  )
}

export default App
