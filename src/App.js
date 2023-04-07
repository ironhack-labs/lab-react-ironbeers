import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <div className="text-center mt-2">
        <Link
          to="/"
          className=" text-4xl font-bold hover:bg-gray-400 rounded-full mt-2 p-2"
        >
          Iron Beers
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
