import { Routes, Route } from 'react-router-dom'
import BeerItem from './components/home-button/beer-item/BeerItem';
import { HomeScreen, BeerScreen, RandomBeerScreen, NewBeerScreen} from './screens'

function App() {
  return (
    <div className="container">
      <div className='d-flex flex-column '>
                
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/beers' element={<BeerScreen />} />
          <Route path='/random-beer' element={<RandomBeerScreen />} />
          <Route path='/new-beer' element={<NewBeerScreen />} />

          <Route path='/beers/:beerId' element={<BeerItem />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
