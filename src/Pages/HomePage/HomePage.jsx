import imageOne from './../../assets/beers.png'
import imageTwo from './../../assets/new-beer.png'
import imageThree from './../../assets/random-beer.png'
import { Link } from 'react-router-dom'

const HomePage = () => {

    return (

        <>
            <div>
                <Link to="/beers"><img src={imageOne} alt="beer" /></Link>
                <h2>All Beers</h2>
            </div>
            <div>
                <Link to="/random-beer"><img src={imageTwo} alt="beer" /></Link>
                <h2>Random Beers</h2>
            </div>
            <div>
                <Link to="/new-beer"><img src={imageThree} alt="beer" /></Link>
                <h2>
                    New Beer
                </h2>
            </div>
        </>

    )
}

export default HomePage