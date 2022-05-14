import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {

  "https://ih-beers-api2.herokuapp.com/beers"

  return (
    <div className="App">
      
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<Header />} />
        <Route path="/random-beer" element={<Header />} />
        <Route path="/new-beer" element={<Header />} />

      </Routes>

    </div>
  );
}

export default App;
