import './App.css';
import {Routes,Route, NavLink} from "react-router-dom"
import Home from './Pages/home';
import Beer from './Pages/Beer';
import NewBeer from './Pages/New-Beer';
import RandomBeer from './Pages/Random-Beer';
import BeerId from './Pages/BeerId';



function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/"><img src='https://res.cloudinary.com/dxwvgsbzq/image/upload/v1663009771/bird/flappy%20monkey/homeButton_trgdas.png' alt='homePage'/></NavLink>
        <NavLink to="/beer">Beer</NavLink>
        <NavLink to="/new-beer">New-beer</NavLink>
        <NavLink to="/random-beer">Random-beer</NavLink>
      </header>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/beer' element={<Beer/>}/>
      <Route path='/beer/:beerId' element={<BeerId beer={Beer}/>}/>
      <Route path='/random-beer' element={<RandomBeer/>}/>
    <Route path='/new-beer' element={<NewBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
