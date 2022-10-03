import './App.css';
import HomePage from './components/HomePage';
import {Routes,Route} from 'react-router-dom'
import AllBeer from './components/AllBeer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Routes>
        <Route path='/'/>
        <Route path='/all-beer' element={<AllBeer />}/>
      </Routes>
    </div>
  );
}

export default App;
