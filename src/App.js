import { Route, Routes } from 'react-router-dom';
import './App.css';
import Beers from './components/Beers';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {

  return (
    <div className="App">
      
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/beers" element={<><Header /> <Beers /></>} />
        <Route path="/random-beer" element={<Header />} />
        <Route path="/new-beer" element={<Header />} />

      </Routes>

    </div>
  );
}

export default App;
