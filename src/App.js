import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage';
import BeersPage from './pages/BeersPage';
import BeersDetailsPage from './pages/BeersDetailsPage'

function App() {

  return (

    <main className='App'>

     <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<BeersPage />} />
         <Route path="/beers/:beer_id" element={<BeersDetailsPage />} />
      </Routes> 
    </main>
  );
}

export default App
