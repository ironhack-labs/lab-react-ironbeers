import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/misc/NavBar/NavBar';
import Home from './views/Home/Home';
import ListBeers from './views/ListBeers/ListBeers';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container my-4">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="beers" element={<ListBeers />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
