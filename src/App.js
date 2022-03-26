import "./App.css";
import { Homepage } from "./components/Homepage";
import { Route, Routes } from "react-router-dom";
import homeIcon from "./assets/round_home_white_24dp.png";
import { Link } from "react-router-dom";

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
        <Route path="/beers" />
        <Route path="/random-beer" />
        <Route path="/new-beer" />
      </Routes>
    </div>
  );
}

export default App;
