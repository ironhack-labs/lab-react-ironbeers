import './App.css';
import { Header } from "./components/"
//router
import { Routes, Route } from 'react-router-dom';
import { Home, Beers, RandomBeer, NewBeer, PageNotFound } from './pages/'

function App() {
  return (
    <div className="App">
            <Header/>

          <Routes>

            <Route exact path='/' element={<Home/>} />
            <Route path='/beers' element={<Beers/>} />
            <Route path='/random-beer' element={<RandomBeer/>} />
            <Route path='/new-beer' element={<NewBeer/>} />
            {/* 👇️ only match this when no other routes match */}
            <Route path='*' element={PageNotFound} />

        </Routes>
    </div>
  );
}

export default App;
