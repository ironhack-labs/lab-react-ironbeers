import { Link } from "react-router-dom";
import img1 from './../assets/beers.png'
import img2 from './../assets/random-beer.png'
import img3 from './../assets/new-beer.png'

function HomePage() {

    return(
        <>
        <img src={img1} alt="" />
        <br />
        <Link to={'/beers'}>All Beers</Link>
        <br />
        <img src={img2} alt="" />
        <br />
        <Link to={'/random-beer'}>Random Beer</Link>
        <br />
        <img src={img3} alt="" />
        <br />
        <Link to={'/new-beer'}>New Beer</Link> 

        </>
    )
}

export default HomePage;
