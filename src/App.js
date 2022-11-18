import './App.css';
import HomePage from './components/Home-page';
import Beers from './components/Beers'
import {Routes, Route} from 'react-router-dom'
import Beerdetails from './components/Beerdetails'

function App() {
  return (
    <div className="App">
      < Routes >
         <Route path='/' element={<HomePage/>} />
         <Route path='/Beers' element={<Beers/>} />
         <Route path='/Beerdetails/:beerId' element={<Beerdetails/>} />

      </Routes>
    </div>
  );
}

export default App;
