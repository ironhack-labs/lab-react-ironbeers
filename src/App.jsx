import HomePage from "./pages/HomePage";
import  "./App.css";
import AddBeerPage from "./pages/AddBeerPage"
import AllBeersPage from "./pages/AllBeersPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";




     function App() {
  return (
   <div className="App">
    
    <Navbar></Navbar>
     <div>
       <Routes>
         <Route path="/" element={<HomePage  />} />
         <Route path="/beers" element={<AllBeersPage />} />
           <Route path="/random-beer" element={<RandomBeerPage  />} />
           <Route path="/new-beer" element={<AddBeerPage  />} />
           <Route path="/beer/:_id" element={<BeerDetailsPage  />} />

           <Route path="*" element={ <HomePage  /> } />
       </Routes>
     </div>

    
   </div>
  )
}
  


export default App;
