import './App.css';

import Homepage from './Pages/homepage';
import BeerList from './Pages/beerList';
import BeerDetails from './Pages/beerDetails';

import{Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/beers'element={<BeerList/>}/>
        <Route path='/beers/:beerId' element={<BeerDetails/>}/>
        <Route path='/randombeer'/>
        <Route path='/newbeer'/>

      </Routes>

    </div>
  );
}

export default App;
