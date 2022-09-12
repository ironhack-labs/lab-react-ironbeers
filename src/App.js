import './App.css';
import {Routes,Route, NavLink} from "react-router-dom"
import Home from './Pages/home';
import Beer from './Pages/Beer';
import NewBeer from './Pages/New-Beer';
import RandomBeer from './Pages/Random-Beer';



function App() {
  return (
    <div className="App">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/beer">Beer</NavLink>
    <NavLink to="/new-beer">New-beer</NavLink>
    <NavLink to="/random-beer">Random-beer</NavLink>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beer' element={<Beer/>}/>
      <Route path='/random-beer' element={<RandomBeer/>}/>
    <Route path='/new-beer' element={<NewBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
