import { Link } from 'react-router-dom'
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import Section from "../components/Section"

function Homepage() {
  const loremIpsum = 'lorem ipsum dolor sit amet, consectet adipiscing elit, sed diam nonumy eirmod tempor incididunt ut labore et dolore magna aliquy. Lorem ipsum dolor sit amet, consectet adipis.'

  return (
    <div className='Homepage'>
      <Link to="/beers" style={{textDecoration: 'none'}}>
        {<Section imgSrc={beers} cardText={loremIpsum} title={"All Beers"} />}
      </Link>

      <Link to="random-beer" style={{textDecoration: 'none'}}>
        {<Section imgSrc={randomBeer} cardText={loremIpsum} title={"Random Beer"} />}
      </Link>

      <Link to="/new-beer" style={{textDecoration: 'none'}}>
        {<Section imgSrc={newBeer} cardText={loremIpsum} title={"New Beer"} />}
      </Link>
    </div>
  )
}

export default Homepage