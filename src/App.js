import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BeerDetailScreen, BeerListScreen, BeerNewScreen, BeerRandomScreen, HomeScreen } from './screens/screens'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/beers' element={<BeerListScreen />}></Route>
        <Route path='/beers/:id' element={<BeerDetailScreen />}></Route>
        <Route path='/random' element={<BeerRandomScreen />}></Route>
        <Route path='/new' element={<BeerNewScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
