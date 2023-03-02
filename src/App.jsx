import React from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  )
}

export default App
