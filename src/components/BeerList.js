import BeerListImage from "../assets/beers.png"
import Header from "./Header"
import { Link } from "react-router-dom";

function BeerList(props) {
    return (
        <>
            <Header />
            <div>
                <img src={BeerListImage} alt="beers" className="homepageImage" />
                <h1>All Beers:</h1>

                {props.beers.map(beer => {
                    return (
                        <div className="box" key={beer._id} >
                            <h2>Name: {beer.name}</h2>
                            <p><img src={beer.image_url} alt="" className="beer-img" /> </p>
                            <p>Tagline: <strong>{beer.tagline}</strong></p>
                            <p>Contributed by {beer.contributed_by}</p>

                            <Link to={`/beers/${beer._id}`}>More details</Link>
                        </div>
                    );
                })}



            </div>
        </>
    );
}

export default BeerList;