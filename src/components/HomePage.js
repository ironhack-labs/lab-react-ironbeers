import {Link} from 'react-router-dom'
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
const HomePage = () => {
    return (
        <div>
            <Link className='home-page' style={{textDecoration: 'none'}} to='/all-beer'>
        <img src={allBeers} alt='beer' />
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nisl sit amet dolor venenatis semper. Vivamus sed metus ut dolor ultrices sodales. Ut vel dapibus mi. Sed tincidunt eros tellus, id consectetur felis hendrerit eget.</p>
      </Link>
      <Link className='home-page' style={{textDecoration: 'none'}} to='/random-beer'>
        <img src={randomBeer} alt='beer' />
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nisl sit amet dolor venenatis semper. Vivamus sed metus ut dolor ultrices sodales. Ut vel dapibus mi. Sed tincidunt eros tellus, id consectetur felis hendrerit eget.</p>
      </Link>
      <Link className='home-page' style={{textDecoration: 'none'}} to='/new-beer'>
        <img src={newBeer} alt='beer' />
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu nisl sit amet dolor venenatis semper. Vivamus sed metus ut dolor ultrices sodales. Ut vel dapibus mi. Sed tincidunt eros tellus, id consectetur felis hendrerit eget.</p>
      </Link>
        </div>
    )
}

export default HomePage