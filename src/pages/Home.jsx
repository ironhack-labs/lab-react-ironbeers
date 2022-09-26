import { Link } from "react-router-dom";


import DisplayHome from '../components/DisplayHome';

import beersImg from "../assets/beers.png";
import randomBeerImg from '../assets/random-beer.png'
import newBeerImg from '../assets/new-beer.png'

const Home = () => {
  return (
    <>
    <Link to={"/beers"}><DisplayHome src={beersImg} title={'All Beers'}/></Link>
    <Link to={"/random-beer"}><DisplayHome src={randomBeerImg} title={'Random Beer'}/></Link>
    <Link to={"/new-beer"}><DisplayHome src={newBeerImg} title={'New Beer'}/></Link>
    </> 
  )
}

export default Home