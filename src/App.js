import "./App.css";
import HomePage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBeers from "./pages/AllBeers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/beers" element={<AllBeers />} />
            <Route path="/random-beer" element={<random-beer />} />
            <Route path="/new-beer" element={<new-beer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
