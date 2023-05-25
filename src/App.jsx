import { Navbar } from 'react-bootstrap';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
