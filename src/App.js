import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/misc/NavBar/NavBar';
import Home from './views/Home/Home';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container my-4">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>

      </div>
    </div>
  );
}

export default App;
