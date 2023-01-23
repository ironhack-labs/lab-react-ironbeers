import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import homeIcon from "./assets/homeIcon48.svg";

function App() {
  return (
    <div className="App">
      <header
        style={{
          backgroundColor: "blue",
          height: "56px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <img src={homeIcon} alt="" height={32} width={32} />
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
