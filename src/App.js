import './App.css';
import { Header } from "./components/"
//router
import { Routes, Route } from 'react-router-dom';
import { Home, Beers, RandomBeer, NewBeer, PageNotFound, SingleBeer } from './pages/'

function App() {
  return (
    <div className="App">
            <Header/>
          <main>
          <Routes>

              <Route exact path='/' element={<Home />} />
              <Route path='/beers' element={<Beers />} />
              <Route path='/beers/:beerId' element={<SingleBeer />} />
              <Route path='/random-beer' element={<RandomBeer />} />
              <Route path='/new-beer' element={<NewBeer />} />
              {/* 👇️ only match this when no other routes match */}
              <Route path='*' element={<PageNotFound />} />

        </Routes>
                    </main>
    </div>
  );
}

export default App;
