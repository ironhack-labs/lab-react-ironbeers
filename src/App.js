import 'bulma/css/bulma.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Misc/Navbar/Navbar';
import AllBeers from './views/AllBeers/AllBeers';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<AllBeers/>}/>
      </Routes>
    </div>
  );
}

export default App;
