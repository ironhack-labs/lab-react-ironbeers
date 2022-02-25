import { Routes, Route } from "react-router-dom";
import { Beers, Home, NewBeer, RandomBeers } from './components'

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Beers" element={<Beers/>}/>
            <Route path="/RandomBeer" element={<RandomBeers/>}/>
            <Route path="/NewBeer" element={<NewBeer/>}/>
            <Route path="*" element={<h1>Page not found</h1>}/>
        </Routes>
    )
};

export default Router;