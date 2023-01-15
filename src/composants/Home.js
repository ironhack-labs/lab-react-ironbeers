
import { NavLink, Link } from 'react-router-dom';
import allBeers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'



const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>

            <Link to='/beers'>
                <div style={{ width: '400px', height: '220px', margin: 'auto', border: '3px solid' }} >
                    <img src={allBeers} style={{ width: '300px', margin: 'auto' }} />
                    <h1 style={{ margin: '0' }}>All Beers !</h1>
                    <p style={{ margin: '0' }}> All Beers !All Beers !All Beers !All Beers !All Beers !All Beers !All Beers !All Beers !All Beers !All Beers !All Beers !All Beers ! </p>
                </div>
            </Link>

            <Link to='/random-beer'>
                <div style={{ width: '400px', height: '220px', margin: 'auto', border: '3px solid' }} >
                    <img src={randomBeer} style={{ width: '300px', margin: 'auto' }} />
                    <h1 style={{ margin: '0' }}>RandomBeer!</h1>
                    <p style={{ margin: '0' }}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 1500s, when an unknown make a type specimen book </p>
                </div>
            </Link>

            <NavLink to='/new-beer'>
                <div style={{ width: '400px', height: '220px', margin: 'auto', border: '3px solid' }} >
                    <img src={newBeer} style={{ width: '300px', margin: 'auto' }} />
                    <h1 style={{ margin: '0' }}>NewBeer</h1>
                    <p style={{ margin: '0' }}> Lorem Ipsum is NewBeer dummy text of the NewBeer and NewBeer industry. Lorem NewBeer has been 1500s, when an NewBeer make a type specimen book </p>
                </div>
            </NavLink>



        </div>
    );
}

export default Home;