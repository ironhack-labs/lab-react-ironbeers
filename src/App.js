import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import BeersPage from './pages/BeersPage';
import OneBeerPage from './pages/OneBeerPage';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/beers' element={<BeersPage />} />
        <Route path='/beers/:id' element={<OneBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
