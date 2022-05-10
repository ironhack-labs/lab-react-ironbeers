import { Link } from 'react-router-dom';
import allBeersImage from '../assets/beers.png'
import newBeerImage from '../assets/new-beer.png'
import randomBeerImage from '../assets/random-beer.png'

function Homepage() {
    return (
    <div>
        <div style={{ display: 'flex', flexDirection: 'column'}}> 
            <h1>Welcome To Ironbeers!</h1>
            <p>The one-stop-shop for all things beer related</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <img src={allBeersImage} alt='all beers' style={{ flex: '1'}}/>
            <Link to="/beers" style={{ textDecoration: 'none', color: 'black', flex: '1', backgroundColor: ''}}><h2 className='homePageText'> List of Beers </h2></Link> 

        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <img src={newBeerImage} alt='all beers' className='homePageImage' style={{ flex: '1'}}/>
            <Link to="/randomBeer" style={{ textDecoration: 'none', color: 'black', flex: '1'}}><h2 className='homePageText'> Random beer selector </h2></Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <img src={randomBeerImage} alt='all beers' className='homePageImage' style={{ flex: '1'}}/>
            <Link to="/newBeer" style={{ textDecoration: 'none', color: 'black', flex: '1'}}><h2 className='homePageText'>Add New Beer!</h2></Link>  
        </div>
    
    </div>
  );

}

export default Homepage;