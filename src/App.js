import './App.css';
import { Routes, Route} from 'react-router-dom'; 
import Header from './header'; 
import Home from './beer/Home'; 
import Beers from './beer/Beers'; 
import SingleBeer from './beer/SingleBeer';
import RandomBeer from './beer/RandomBeer'; 
import NewBeer from './beer/NewBeer'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/beers' element={<Beers />} />
        <Route path='/singlebeer/:id' element={<SingleBeer />}/>
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} /> 
        
      </Routes>
    </div>
  );
}

export default App;
