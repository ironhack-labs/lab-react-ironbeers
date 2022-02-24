

import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";  // <== IMPORT
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import { useLocation} from 'react-router-dom'
import RandomBeer from './components/RandomBeer';
import BeerForm from './components/BeerForm';

function App() {


  return (
    <div className="App">
  
    { useLocation().pathname != "/" &&  <Link to="/">  <div className="homeBtn">HOME</div></Link>  }
       <ul>
       <li>
        <Link to="/"> Home </Link>
        </li>         
        <li>
        <Link to="/beers"> Beers </Link>  
        </li>    {/* <== ADD */}
         
        <li>
        <Link to="/beerForm"> New Beer </Link>
        </li>           {/* <== ADD */}
        <Link to="/random-beer"> Random Beer </Link>  {/* <== ADD */}
      </ul>


        <Routes>
        {/* <Route path="/" element={<HomePage />} />  */}
        <Route path="/beers" element={<Beers />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
          <Route path="/beers/:id" element={<BeerDetails />} />


            <Route path="random-beer" element={<RandomBeer />} />
            
          
      </Routes>
    </div>
  );
}

export default App;



function Navbar() {
  return (
    <nav className="Navbar">
   
    </nav>
  );
}