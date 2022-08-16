
import './App.css';
import {  InicioBeers } from './components';
import img1 from "../src/assets/beers.png"
import img2 from "../src/assets/new-beer.png"
import img3 from "../src/assets/random-beer.png"
import RootRouter from './RootRoutes';



function App() {
  return (
    <div className="App">
    <nav style={{backgroundColor: '#4AD0EE', height:'30px',paddingTop:'10px'}}>🏠</nav>
      
      <div style={{paddingLeft:'280px'}}>
      <InicioBeers imag1={img1} imag2={img2} imag3={img3}/>
      </div>
    <RootRouter/>
  
    </div>
  );
}

export default App;
