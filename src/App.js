import logo from './logo.svg';
import './App.css';
import React from 'react'
import imgAllBeers from './assets/beers.png'
import imgRandomBeer from './assets/random-beer.png'
import imgNewBeer from './assets/new-beer.png'
import imgHeader from './assets/header.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import axios from "axios";


const HomePage= () => {

  return(
    
    <div className="HomePage">
      <div className="HomePageBox">
        <h1> All Beers</h1>
        <Link to ="/beers"> <img src={imgAllBeers} /> </Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla ultrices orci, ac posuere dui laoreet in. Nunc nec velit at massa viverra fermentum. Maecenas porttitor placerat elit vitae vehicula. Nunc nec felis lobortis ipsum feugiat laoreet eget eu enim. Suspendisse convallis aliquam elit, ac iaculis mauris volutpat ut. Suspendisse venenatis lacus non tellus vehicula feugiat. Pellentesque semper velit pulvinar neque rhoncus sagittis. Morbi nec dui libero.</p>
      </div>
      <div className="HomePage">
        <h1> Random Beer</h1>
        <Link to="/random"><img src={imgRandomBeer} /></Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla ultrices orci, ac posuere dui laoreet in. Nunc nec velit at massa viverra fermentum. Maecenas porttitor placerat elit vitae vehicula. Nunc nec felis lobortis ipsum feugiat laoreet eget eu enim. Suspendisse convallis aliquam elit, ac iaculis mauris volutpat ut. Suspendisse venenatis lacus non tellus vehicula feugiat. Pellentesque semper velit pulvinar neque rhoncus sagittis. Morbi nec dui libero.</p>
      </div>

      <div className="HomePageBox">
        <h1> New Beers</h1>
        <img src={imgNewBeer} />
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla ultrices orci, ac posuere dui laoreet in. Nunc nec velit at massa viverra fermentum. Maecenas porttitor placerat elit vitae vehicula. Nunc nec felis lobortis ipsum feugiat laoreet eget eu enim. Suspendisse convallis aliquam elit, ac iaculis mauris volutpat ut. Suspendisse venenatis lacus non tellus vehicula feugiat. Pellentesque semper velit pulvinar neque rhoncus sagittis. Morbi nec dui libero.</p>
      </div>
    </div>

  )
}

const Header = () => {

  return(
    <div>
      <nav>
       <Link to="/">
         <img src={imgHeader}/>
       </Link>
      </nav>
    </div>
  )
}

const AllBeers = () => {

const instance = axios.create({
  baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
});

const [beers,updateBeers] = React.useState([])

  async function getBeers() {
    const { data } = await instance.get("/");
    updateBeers(data);
  }
  React.useEffect(() => {
    getBeers();
  }, []);

  
  return(
    <div>
      <Header/>
      {beers.map((beer)=> {
    return(
      <div>
        <Link to={`/${beer._id}`}><img src ={beer.image_url}></img> </Link>
        <p> {beer.name}</p>
        <p> {beer.tagline}</p>
        <p> {beer.contributed_by}</p>
      </div>
    )
  
  })}


    </div>
  )
}

const NewBeer = () =>{

  const instance = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
  });

  const {id} = useParams()
  
  const [beer,updateBeer] = React.useState(null)
  
  async function getBeer() {
      const { data } = await instance.get(`/${id}`);
      updateBeer(data);
    }
    React.useEffect(() => {
      getBeer();
    }, [id]);

  return(
    <div>
      <Header/>
       <div>
        <img src ={beer?.image_url}></img>
        <p> {beer?.name}</p>
        <p> {beer?.tagline}</p>
        <p> {beer?.contributed_by}</p>
      </div>

    </div>
  )
}

const RandonBeer = () => {

  const instance = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers',
  });
  
  const [beer,updateBeer] = React.useState(null)
  
  async function getBeer() {
      const { data } = await instance.get("/random");
      updateBeer(data);
    }
    React.useEffect(() => {
      getBeer();
    }, []);

  return(
    <div>
      <Header/>
       <div>
        <img src ={beer?.image_url}></img>
        <p> {beer?.name}</p>
        <p> {beer?.tagline}</p>
        <p> {beer?.contributed_by}</p>
      </div>

    </div>
  )

}

function App() {
  return (
    <div className="App">
<Router>

  <Switch>
  <Route exact path="/">
      <HomePage/>
    </Route>
    <Route path="/beers">
      <AllBeers></AllBeers>
    </Route>
    <Route path="/:id">
      <NewBeer></NewBeer>
    </Route>
    <Route path="/random">
      <RandonBeer></RandonBeer>
    </Route>
  </Switch>
</Router>

      
    </div>
  );
}

export default App;
