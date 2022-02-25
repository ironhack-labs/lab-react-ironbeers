import HomePage from './components/HomePage'
import Cervezas from './components/Cervezas'

import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cervezas" element={<Cervezas />} />
      </Routes>
    </>
  )
}

export default App;
