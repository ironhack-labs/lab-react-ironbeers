import './App.css';
import { Routes, Route } from "react-router-dom";

import BeersPage from "./pages/BeersPage";
import BeerDetails from './pages/BeerDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BeersPage />} />
        <Route path="/:id" element={<BeerDetails />} />
        <Route path="/random" element={<BeersPage />} />
        <Route path="/new" element={<BeersPage />} />
        <Route path="search?q={query}" element={<BeersPage />} />
      </Routes>
    </div>
  );
}

export default App;
