import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./components/Home";
import ListBeers from "./components/ListBeers";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer"


function App() {
 const style = { textDecoration: "none" };
  return (
    <div className="App">
      <div className="container">

        <Link to="/" style={style}>
          <h1 className="nav-bar">🍺</h1>  
        </Link>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/beers" element={ <ListBeers/> } />
          <Route path="/random-beer" element={ <RandomBeer/> } />
          <Route path="/new-beer" element={ <NewBeer/> } />
          <Route path={`/beers/:beerId`} element={ <SingleBeer/> } />
        </Routes>

      </div>
    </div>
  );
}

export default App;
