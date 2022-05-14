import beers from './assets/beers.png'
import newBeer from './assets/new-beer.png'
import randomBeer from './assets/random-beer.png'
import './App.css';
import axios from 'axios';
import {useState ,useEffect} from 'react';
import { Route, Routes , NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
import AllBeers from './components/AllBeers'
import BeerDetails from './components/BeerDetails'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'




function App() {
  const [beerList, setBeerList] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        setBeerList(response.data);
      })
      .catch(e => console.log("error getting beer from API", e))
  }, [beerList])




  const homeData=()=>{
    return(
      <>
        <img src={beers} /><br/>
        <NavLink to='/beers'>All Beers</NavLink><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat veritatis, dicta exercitationem animi pariatur adipisci ut ea ipsa nulla, nostrum suscipit ad modi itaque? Facere, necessitatibus quas! Ipsa culpa incidunt itaque rerum alias vitae hic? Blanditiis itaque quam mollitia?</p><br/>
        <img src={newBeer} /><br/>
        <NavLink to='/random-beer'>Random Beer</NavLink><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat veritatis, dicta exercitationem animi pariatur adipisci ut ea ipsa nulla, nostrum suscipit ad modi itaque? Facere, necessitatibus quas! Ipsa culpa incidunt itaque rerum alias vitae hic? Blanditiis itaque quam mollitia?</p><br/>
        <img src={randomBeer} /><br/>
        <NavLink to='/new-beer'>New Beer</NavLink><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat veritatis, dicta exercitationem animi pariatur adipisci ut ea ipsa nulla, nostrum suscipit ad modi itaque? Facere, necessitatibus quas! Ipsa culpa incidunt itaque rerum alias vitae hic? Blanditiis itaque quam mollitia?</p><br/>

      </>
    )
  }


  return (
    <div className="App">

<Navbar />
      <Routes>
        <Route path="/" element={homeData()}/>
        <Route path='/beers' element={<AllBeers beerList={beerList} />} /> 
        <Route path='/beers/:beerId' element={<BeerDetails beerList={beerList}  />} />
        <Route path='/new-beer' element={<NewBeer  />} />
        <Route path='/random-beer' element={<RandomBeer  />} /> 
      </Routes>

    </div>
  );
}

export default App;
