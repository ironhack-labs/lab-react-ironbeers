import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ListBeer from './components/list-beer/ListBeer';
import DetailBeer from './components/detail-beer/DetailBeer';
import NewBeer from './components/new-beer/NewBeer';

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<ListBeer />}></Route>
        <Route path="/:id" element={<DetailBeer />}></Route>
        <Route path="/random" element={<DetailBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
