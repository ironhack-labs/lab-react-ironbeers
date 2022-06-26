import "./App.css";
import BeersPage from "./pages/AllBeers.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<BeersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
