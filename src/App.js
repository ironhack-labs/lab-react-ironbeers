import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import BeerScreen from './screens/BeerScreen/BeerScreen';
import NewBeerScreen from './screens/NewBeerScreen/NewBeerScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='Routes'>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/beers' element={<BeerScreen />} />
            <Route path="/random-beer" element={<DetailsScreen />} />
            <Route path='/beers/:id' element={<DetailsScreen />} />
            <Route path='/beers/new' element={<NewBeerScreen />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
