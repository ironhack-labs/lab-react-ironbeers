import './App.css';
import {Routes, Route} from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SingleBeer from './components/SingleBeer';
import AddBeer from './components/AddBeer';


function App() {
  return (
    <div className="App">
    
    <Navbar/>
    <Routes>
    <Route path ='/' element ={<Home/>} />
    <Route path ="/list" element ={<Beers />} />
    <Route path='/details/:id' element = {<SingleBeer/>} />
    <Route path='/random' element = {<RandomBeer/>} />
    <Route path='/newbeer' element = {<AddBeer/>} />
    </Routes>

    </div>
  );
}

export default App;
