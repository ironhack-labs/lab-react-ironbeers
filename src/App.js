import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';

function App() {

  "https://ih-beers-api2.herokuapp.com/beers"

  return (
    <div className="App">
      
      <Routes>

        <Route path="/" element=<Homepage /> />

      </Routes>

    </div>
  );
}

export default App;
