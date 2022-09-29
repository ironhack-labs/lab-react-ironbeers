import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/misc/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AllBeersScreen from './screens/AllBeersScreen/AllBeersScreen';
import BeerDetailScreen from './screens/BeerDetail/BeerDetailScreen';
import InputScreen from './screens/InputScreen/InputScreen';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="py-4">
        <Routes>
          <Route path='/' element={ <HomeScreen /> } />
          <Route path='/beers' element={ <AllBeersScreen /> } />
          <Route path='/beers/new' element={ <InputScreen /> } />
          <Route path='/beers/random' element={ <BeerDetailScreen /> } />
          <Route path='/beers/:id' element={ <BeerDetailScreen /> } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
