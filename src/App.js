// import './App.css';
import Home from './pages/Home';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import axios from "axios";
import{useState, useEffect} from "react"
import Beers from './pages/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './pages/Random-beer';
import NewBeer from './pages/New-beer';

function App() {

  const { pathname } = useLocation(); //para agarrar la lokeishon actual

  const [beers, setBeers] = useState([])

  useEffect(()=>{
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response =>{
      console.log(response)
      setBeers(response.data)
    })
}, [])



  return (
    <div className="App">
      
      { pathname !== '/' && <Header /> } {/* compara que la lokeishon actual sea diferente a Home para mostrar el Header */}
      


      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path='/Beers' element={ <Beers beers={beers}/>}/>
        <Route path='/Beers/:id' element={ <BeerDetails beers={beers}/>}/>
        <Route path='/Random-beer' element={ <RandomBeer beers={beers}/>}/>
        <Route path="/New-beer" element={<NewBeer />} />
        
      </Routes>
    </div>
  );
}

export default App;
