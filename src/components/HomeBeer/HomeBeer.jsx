import './HomeBeer.css'
// import axios from 'axios'
import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'
import { Link } from 'react-router-dom'


function HomeBeers() {

    return (
        <div className='HomeBeers'>
            <div className='mt-5'>
                <img src={beers} alt="" />
                <div>
                    <Link to="beers/allBeers">All Beers</Link>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                    </p>
                </div>
            </div>
            <div className='mt-5'>
                <img src={randomBeer} alt="" />
                <Link to="beers/randonBeer">All Random Beers</Link>
                <p>
                    Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                </p>
            </div>
            <div className='mt-5'>
                <img src={newBeer} alt="" />
                <Link to="/beers/newBeers">New Beer</Link>
                <p >
                    Sed ut perspiciatis unde omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                </p>
            </div>
        </div>
    )
}


export default HomeBeers