import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";

import {Home} from "./components/Home";
import {BeersList} from "./components/BeersList";
import {Navbar} from "./components/Navbar";
import {BeerDetails} from "./components/BeerDetails";
import {RandomBeer} from "./components/RandomBeer";
import {BeerForm} from "./components/BeerForm";

function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/beers" element={<BeersList/>}/>
                <Route path="/beers/:beerId" element={<BeerDetails/>}/>
                <Route path="/random-beer" element={<RandomBeer/>}/>
                <Route path="/new-beer" element={<BeerForm />}/>
            </Routes>
        </div>
    );
}

export default App;
