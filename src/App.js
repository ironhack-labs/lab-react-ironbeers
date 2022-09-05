import './App.css';
import { Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BeerList from "./Pages/BeerList";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";





function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beer" element={<BeerList />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />

        

      </Routes>  
    </div>
  );
}

export default App;
