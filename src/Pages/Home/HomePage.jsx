
import { Link } from 'react-router-dom'
import beerImg from './../../assets/beers.png'
import newBeerImg from './../../assets/new-beer.png'



const Homepage = () => {

    return (
        <>
            <div className="m-2">
                <img src={beerImg} />
                <Link to='/beers'><h4>All Beers</h4></Link>
                <p className="no-text-decoration">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus. Faucibus in ornare quam viverra orci sagittis.</p>
            </div>
            <div className="m-2">
                <img src={newBeerImg} />
                <Link to='/beers/random'><h4>Random Beer</h4></Link>
                <p className="no-text-decoration">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus. Faucibus in ornare quam viverra orci sagittis.</p>
            </div>
            {/* <div className="m-2">
                <img src={beerImg} />
                <Link to='/beers'><h4>All Beers</h4></Link>
                <p className="no-text-decoration">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget nunc lobortis mattis aliquam faucibus purus. Faucibus in ornare quam viverra orci sagittis.</p>
            </div> */}


        </>

    )
}

export default Homepage