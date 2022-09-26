import { Link } from "react-router-dom"

function Beer({ beer }) {
    return (
        <div className="container-fluid all-beers">
            <img className="img-beer p-4" src={beer.image_url} alt="" />
            <div>
                <h2>{beer.name}</h2>
                <h3 className="text-muted h5">{beer.tagline}</h3>
                <span><strong>Created by: </strong></span>
                <span>{beer.contributed_by}</span><br></br>
                <Link className="btn btn-outline-dark mt-4" to={`/beers/${beer._id}`}>More</Link>
            </div>

        </div>

    )

}

export default Beer