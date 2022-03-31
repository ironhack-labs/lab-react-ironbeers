import { Routes, Route} from 'react-router';
import Home from './views/home/Home';
import Beers from './views/beers/Beers';
import BeerDetail from './views/beers/BeerDetail'
import "./App.css";

function App() {
      return (
<div className='App'>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Beers' element={<Beers/>} />
    <Route path='/Beers/:id' element={<BeerDetail/>} />
  </Routes>
</div>
    );
}

export default App;
