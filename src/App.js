import { Routes, Route, Navigate } from "react-router";
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-beer" element={<Header /> } />
        <Route path="/new-beer" element={<Header /> } />
      </Routes>
      
    </div>
  );
}

export default App;
