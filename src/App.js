import './App.css';
import { Navbar } from './components/misc/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/Home/HomeScreen';
import BeersListScreen from './screens/BeersList/BeersListScreen';
import BeerDetailScreen from './screens/BeerDetail/BeerDetailScreen';
import RandomBeerScreen from './screens/RandomBeer/RandomBeerScreen';
import NewBeerScreen from './screens/NewBeer/NewBeerScreen';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="Screens-container">
        <Routes>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/beers" element={<BeersListScreen />}></Route>
          <Route path="/beers/:id" element={<BeerDetailScreen />}></Route>
          <Route path="/random-beer" element={<RandomBeerScreen />}></Route>
          <Route path="/new-beer" element={<NewBeerScreen/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
