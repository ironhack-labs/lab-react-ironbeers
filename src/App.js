import logo from './logo.svg';
import './App.css';
import {Routes,Route, NavLink} from "react-router-dom"
import Home from './Pages/home';
import Beer from './Pages/Beer';
import NewBeer from './Pages/New-Beer';
import RandomBeer from './Pages/Random-Beer';



function App() {
  return (
    <div className="App">
    <NavLink to={<Beer/>}>Beer</NavLink>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/beer' element={<Beer/>}/>
    <Route path='randon-beer'/>
    <Route path='new-beer'/>
    </Routes>
    </div>
  );
}

export default App;
