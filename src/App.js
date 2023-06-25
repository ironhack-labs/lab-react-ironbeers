import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/beers" />
        <Route path="/random-beer" />
        <Route path="/new-beer" />
      </Routes>

    </div>
  );
}

export default App;
