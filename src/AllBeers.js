import { Link } from "react-router-dom";
import beerPic from "../src/assets/beer.png"

export default function AllBeers(props) {
// console.log(props)

    return <>    
    <div className="navbar-home">
      <Link to="/"><img className="home-img"src={beerPic} alt=""/> </Link>
     </div>
    {props.beers.map((beer) => {
        return <p className="allbeers-container">
        <Link to={beer._id} ><img src={beer.image_url} className="beer-img" alt=""/> </Link>
          <div>
            <h3> {beer.name}</h3>
            <p> {beer.tagline}</p>
            <h4> Created by: {beer.name}</h4>
          </div>
        </p>
    })}
     </>
};
