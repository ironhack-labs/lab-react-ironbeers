import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";
import BeerList from "./Pages/BeerList";
import SingleBeer from "./Pages/SingleBeer";
import { Center } from "@chakra-ui/react";
import { AiOutlineHome } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <Center p={4} bg="teal.500">
        <NavLink to="/" ><AiOutlineHome size="2rem" color="white"/> </NavLink>
      </Center>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
