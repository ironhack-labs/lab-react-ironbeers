import React from 'react'
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>

        <Navbar />

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} />

        </Routes>

    </div>
  )
}

export default App