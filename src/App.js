import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ListBeer from './components/list-beer/ListBeer';
import NewBeer from './components/new-beer/NewBeer';
import ItemBeer from './components/item-beer/ItemBeer'

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<ListBeer />}></Route>
        <Route path="/random-beer" element={<ItemBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
