import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
// import Navbar from './components/Navbar';
import Allbeers from './components/Allbeers';
// import Randombeer from './components/Randombeer';
// import Newbeer from './components/Newbeer'
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      {/* <Homepage></Homepage> */}
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/beers" element={<Allbeers></Allbeers>}></Route>
        {/* <Route path="/random-beer" element={<Randombeer></Randombeer>}></Route>
        <Route path="/new-beer" element={<Newbeer></Newbeer>}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
