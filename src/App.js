import { Routes, Route } from 'react-router-dom'
import './App.css';
import AllBeersPage from './pages/allBeersPage/AllbeersPage';
import DetailBeerPage from './pages/detailBeerPage/DetailBeerPage';
import HomePage from './pages/homePage/HomePage'
import NewBeerPage from './pages/newBeerPage/NewBeerPage';
import RandomBeerPage from './pages/randomBeerPage/RandomBeerPage';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/beers' element={<AllBeersPage></AllBeersPage>} ></Route>
        <Route path='/beers/:id' element={<DetailBeerPage> </DetailBeerPage>} ></Route>
        <Route path='/random-beer' element={<RandomBeerPage></RandomBeerPage>} ></Route>
        <Route path='/new-beer' element={<NewBeerPage></NewBeerPage>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
