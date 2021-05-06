import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react'
import Routes from './routes/Routes'
import Navigation from './layout/navigation/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes /> 
      </main>
    </>
  )
}

export default App;
