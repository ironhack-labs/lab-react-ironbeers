import "./App.css";
import { Homepage } from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import homeIcon from "./assets/round_home_white_24dp.png";
import { Link } from "react-router-dom";
import { ListBeers } from "./components/ListBeers";
import { SingleBeer } from "./components/SingleBeer";
import { RandomBeer } from "./components/RandomBeer";
import { NewBeer } from "./components/NewBeer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <header
            style={{
              width: "80%",
              backgroundColor: "#4db8ff",
              height: "50px",
              borderRadius: "0 0 80px 80px",
              boxShadow: "5px 5px 20px lightgrey",
            }}
          >
            <Link to="/">
              <img src={homeIcon} alt="home-icon" />
            </Link>
          </header>
        </div>
      )}

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
