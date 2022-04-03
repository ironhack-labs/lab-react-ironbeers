import { Routes, Route } from 'react-router'
import Home from './views/Home/Home'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
      </Routes>
    </div>
  )
}

export default App
