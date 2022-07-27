import allBeersImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'

import { Link } from 'react-router-dom';

function HomePage(){
  return (
    <div style={{
      textAlign: 'start',
      fontStyle: 'Arial'
    }}>
      <Link to="/beers" style={{
        textDecoration: 'none',
        color: 'black'
      }}>
        <div>
          {/* background image */}
          <div
            style={{
              backgroundImage: `url(${allBeersImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '200px',
            }}
          ></div>
          <h2>All Beers</h2>
          <p
            style={{
              fontSize: '14px',
              color: 'gray'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </Link>
      
      <Link to="/random-beer"  style={{
        textDecoration: 'none',
        color: 'black'
      }}>
        <div>
          {/* background image */}
          <div
            style={{
              backgroundImage: `url(${randomBeerImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '200px',
            }}
          ></div>
          <h2>Random Beer</h2>
          <p
            style={{
              fontSize: '14px',
              color: 'gray'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </Link>
      
      <Link to="/new-beer" style={{
        textDecoration: 'none',
        color: 'black'
      }}>
        <div>
          {/* background image */}
          <div
            style={{
              backgroundImage: `url(${newBeerImg})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '200px',
            }}
          ></div>
          <h2>New Beer</h2>
          <p
            style={{
              fontSize: '14px',
              color: 'gray'
            }}  
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      
      </Link>
    </div>
  )
}

export default HomePage;