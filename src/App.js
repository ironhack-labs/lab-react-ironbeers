import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<><Header /><HomePage /></>}/>
        {/* <Route path="/" element={<Header />}/> */}
        <Route path="/beers" />
        <Route path="/random-beer" />
        <Route path="/new-beer" />
      </Routes>

    </div>
  );
}

export default App;
