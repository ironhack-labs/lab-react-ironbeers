import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Beer from './pages/Beer'; 
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeerDetails from './pages/BeerDetails';



function App() {
  return (
    <div className="App">
      <Route path='/' element={< Home />}/>
      <Route path='/beer' element={< Beer />}/>
      <Route path='/random-beer' element={< RandomBeer/>}/>
      <Route path='/new-beer' element={< NewBeer />}/>
      <Route path='/beer/:id' element={< BeerDetails />}/>
      
   
    </div>
  );
}

export default App;
