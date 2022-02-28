import {Link} from "react-router-dom"

const AllBeersLink = ({beer}) => {
    return (
        <div className="allBeersLink">
            <div className="linkImg">
                <img src={beer.image_url} alt="beer" />
            </div>
            <div className="linkDetails">
                <Link to={`/beers/${beer._id}`}><h4>{beer.name}</h4></Link>
                <p className="linkTagline">{beer.tagline}</p>
                <p className="linkContributed">Created By: {beer.contributed_by}</p>
                
            </div>

        </div>
    )
}

export default AllBeersLink