import { Routes, Route } from 'react-router-dom';

import './App.css';

import Beers from './page/Beers';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/beers' element={ <Beers /> } />
      </Routes>      
    </div>
  );
}

export default App;
