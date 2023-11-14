import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

function HomePage() {

    return (

        <>
            <Navbar />

            <div className='home-page'>

                <NavLink to='/beers'><img src='./src/assets/beers.png' />
                    <p className='home-page-text'>All Beers</p>
                </NavLink>

                <NavLink to='/random-beer'><img src='./src/assets/random-beer.png' />
                    <p className='home-page-text'>Random Beers</p>
                </NavLink>
                
                <NavLink to='/new-beer'><img src='./src/assets/new-beer.png' />
                    <p className='home-page-text'>New Beers</p>
                </NavLink>

            </div>
        </>

    );
}

export default HomePage;
