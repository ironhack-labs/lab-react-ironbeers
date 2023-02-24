import './App.css';
import Navbar from "./components/Navbar"
import ListBeers from "./pages/ListBeers"
import SingleBeer from "./pages/SingleBeer"
import NewBeer from "./pages/NewBeer"
import RandomBeer from "./pages/RandomBeer"
import HomePage from "./pages/HomePage"
import {Routes, Route} from "react-router-dom"
import { useLocation } from 'react-router-dom';

function App() {

  const {pathname} = useLocation()
  return (
    <div className="App">
     {pathname !== "/" && <Navbar />}
    {/*} <ListBeers />*/}
    
  
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/beers" element={<ListBeers />} />
    <Route path="/random-beers" element={<RandomBeer />} />
    <Route path="/new-beer" element={<SingleBeer />}  />
  </Routes>
    </div>
  );
}

export default App;
