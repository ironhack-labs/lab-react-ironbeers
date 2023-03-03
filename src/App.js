import "./App.css";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import {Routes, Route} from 'react-router-dom';
import Beers from "./pages/Beers";
import RandomBeers from "./pages/RandomBeers";
import NewBeers from "./pages/NewBeers";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element ={<Homepage />}></Route>
      <Route path="/beers" element ={<Beers/>}></Route>
      <Route path="/newbeers" element ={<NewBeers/>}></Route>
      <Route path="/randombeers" element ={<RandomBeers/>}></Route>
      

      </Routes>

      
    </div>
  );
}

export default App;
