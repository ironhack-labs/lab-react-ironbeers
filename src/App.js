import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import CreateBeer from './components/CreateBeer';
import SingleBeer from './components/SingleBeer';



function App() {



  return (
    <div className="App">
        <NavBar />

          <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/beers' element={<BeerList />}/>
              <Route path='/beers/:id' element={<BeerDetails /> }/>
              <Route path='/randomBeer' element={<SingleBeer /> }/>
              <Route path='/create' element={<CreateBeer />}/>
              <Route path='/search?q=${query}' element={<SingleBeer />}/>
          </Routes>
    </div>
    

  );
}

export default App;
