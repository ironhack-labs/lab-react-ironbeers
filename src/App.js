import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Beers from "./pages/Beers";
import SingleBeer from "./pages/SingleBeer";
import RandoomBeer from "./pages/RandoomBeer";
import CreateBeers from "./pages/CreateBeers";

function App() {
  return (
    <div className="App">

    <Header/>
      <Routes>
      
        <Route path="/" element={<Home />} />
         <Route path="/beers" element={<Beers />} />
        
         <Route path="/beers/:beerId" element={<SingleBeer />} /> 
           <Route path="/create-beers" element={<CreateBeers />} /> 
          <Route path="/random-beers" element={<RandoomBeer />} /> 
      </Routes>
    </div>
  );
}

export default App;