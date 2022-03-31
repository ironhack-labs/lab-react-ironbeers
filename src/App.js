import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import './App.css';
// import Beers from './views/Beers/Beers';
// import BeerDetail from './views/Beers/BeerDetail';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/beers" element={<Beers/>}/>
        <Route path="/beers/:id" element={<BeerDetail/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
