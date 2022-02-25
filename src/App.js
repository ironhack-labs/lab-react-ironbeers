import './App.css';
import { Routes, Route, Link  } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
    <Navbar/>
      <Routes> 
        <Route path='/' element={<HomePage />} />
    </Routes>
    </>
  );
}

export default App;
