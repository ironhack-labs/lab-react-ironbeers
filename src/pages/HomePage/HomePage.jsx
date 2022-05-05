import { Link } from "react-router-dom"
import './HomePage.css'
import Allbeers from '../../assets/beers.png'
import Random from '../../assets/random-beer.png'
import NewBeer from '../../assets/new-beer.png'


const HomePage = () => {
    return (
        <div>

            <img src={Allbeers} alt="All beers" />
            <div>
                <Link to="/beers"> <h2>All beers</h2> </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex consequuntur corrupti tempore necessitatibus inventore est aspernatur unde.</p>
            </div>


            <img src={Random} alt="Random Beer" />
            <div>
                <Link to="/random"><h2>Random Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex consequuntur corrupti tempore necessitatibus inventore est aspernatur unde.</p>
            </div>


            <img src={NewBeer} alt="New Beer" />
            <div>
                <Link to="/new-beer"> <h2>New Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex consequuntur corrupti tempore necessitatibus inventore est aspernatur unde.</p>
            </div>

        </div>
    )
}
export default HomePage
