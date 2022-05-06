import Allbeers from '../../assets/beers.png'
import RandomBeer from '../../assets/random-beer.png'
import NewBeer from '../../assets/new-beer.png'
import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <div className='container'>

            <div className='allbeers' >
                <Link to='/beers'><img src={Allbeers} alt='allbeers' /> </Link>

                <h2>ALL BEERS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fermentum tincidunt ex et dictum. Suspendisse potenti.
                    Integer andit. Curabi, congue turpis.</p>
            </div>

            <div className='allbeers'>
                <img src={RandomBeer} alt='allbeers' />
                <h2>RANDOM BEER</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fermentum tincidunt ex et dictum. Suspendisse potenti.
                    Integer andit. Curabi, congue turpis.</p>
            </div>

            <div className='allbeers'>
                <img src={NewBeer} alt='allbeers' />
                <h2>NEW BEER</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam fermentum tincidunt ex et dictum. Suspendisse potenti.
                    Integer andit. Curabi, congue turpis.</p>
            </div>

        </div>
    )
}

export default HomePage
