import { NavLink } from 'react-router-dom';
import ImageOne from '../assets/beers.png';
import ImageTwo from '../assets/random-beer.png';
import ImageThree from '../assets/new-beer.png'


function HomePage() {
    return (
        <div className='col-7'>
            <nav>
                <NavLink to="/beers" >
                    <img src={ImageOne} alt="All Beers" />
                    <h2 className='text-dark'>All Beers</h2>
                    <h3 className='text-black-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit odio soluta deserunt voluptates aspernatur optio, sunt culpa nisi fugiat minima.</h3>
                </NavLink>
                <NavLink to="/random-beer">
                    <img src={ImageTwo} alt="Random Beers" />
                    <h2 className='text-dark'>Random Beer</h2>
                    <h3 className='text-black-50' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos velit enim aperiam sunt quasi ut similique ullam quaerat obcaecati perspiciatis?</h3>
                </NavLink>
                <NavLink to="/new-beer" >
                    <img src={ImageThree} alt="New Beer" />
                    <h2 className='text-dark'>New Beer</h2>
                    <h3 className='text-black-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nihil, sapiente fugiat fugit labore sed ad officiis ratione dolorem mollitia!</h3>
                </NavLink>
            </nav>
        </div>
    );
}

export default HomePage;
