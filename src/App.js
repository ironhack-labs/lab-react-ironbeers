import "./App.css";
import axios from "axios";
import HomePage from "./components/HomePage.js";
import BeerList from "./components/BeerList";
import RandomBeer from "./components/RandomBeer";
import CreateBeer from "./components/CreateBeer";
import SingleBeer from "./components/SingleBeer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/beers" element={<BeerList />}></Route>
                <Route path="/beers/:beerId" element={<SingleBeer />}></Route>
                <Route path="/random-beer" element={<RandomBeer />}></Route>
                <Route path="/new-beer" element={<CreateBeer />}></Route>
            </Routes>
        </div>
    );
}

export default App;
