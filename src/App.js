import { Routes, Route, Navigate } from 'react-router';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
