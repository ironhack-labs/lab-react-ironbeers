import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
// import Navbar from './components/Navbar';
import Allbeers from './components/Allbeers';
import Randombeer from './components/Randombeer';
import Newbeer from './components/Newbeer'
import Homepage from './components/Homepage';
import Beerdetails from './components/Beerdetails';

function App() {
  return (
    <div className="App">
      {/* <Homepage></Homepage> */}
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/beers" element={<Allbeers></Allbeers>}></Route>
        <Route path="/beers/:id" element={<Beerdetails/>}></Route>
        <Route path="/randombeer" element={<Randombeer></Randombeer>}></Route>
        <Route path="/newbeer" element={<Newbeer></Newbeer>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
