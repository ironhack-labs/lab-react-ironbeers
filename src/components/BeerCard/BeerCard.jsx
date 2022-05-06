import { Link } from "react-router-dom"

function BeerCard({ beer }) {
    return (
        <div className="container">
            <img src={beer.image_url} alt={beer.name}></img>
            <Link to={`/${beer._id}`}> <h1>{beer.name}</h1></Link>
            <h2>{beer.tagline}</h2>
            <h3>{beer.description}</h3>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.contributed_by}</p>

        </div>
    )
}

export default BeerCard