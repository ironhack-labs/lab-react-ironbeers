import { Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import RestPages from './page/RestPages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <RestPages /> } />
      </Routes>      
    </div>
  );
}

export default App;
