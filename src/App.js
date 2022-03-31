import { Route, Routes } from 'react-router';
import Home from './views/Home/Home';
import './App.css';
import Navbar from './components/misc/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
