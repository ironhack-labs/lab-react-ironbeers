import "./App.css";
import { Homepage } from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import homeIcon from "./assets/round_home_white_24dp.png";
import { Link } from "react-router-dom";
import { ListBeers } from "./components/ListBeers";
import { SingleBeer } from "./components/SingleBeer";
import { RandomBeer } from "./components/RandomBeer";
import { NewBeer } from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <>
        <header style={{ backgroundColor: "#4db8ff", height: "50px" }}>
          <Link to="/">
            <img src={homeIcon} alt="home-icon" />
          </Link>
        </header>
      </>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
