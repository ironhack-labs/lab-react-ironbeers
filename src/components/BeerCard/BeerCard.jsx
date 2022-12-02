import "./BeerCard.css"
import { useNavigate } from "react-router-dom"

const BeerCard = ({ beer }) => {

    const { image_url, name, tagline, contributed_by, _id } = beer

    const navigate = useNavigate()

    return (
        <div className="beerCard" onClick={() => navigate(`/beers/${_id}`)}>
            <img src={image_url} alt="" />
            <div className="textContainer">
                <span className="mb-3">{name}</span>
                <span className="mb-3">{tagline}</span>
                <span className="mb-3"><strong>Created By: </strong>{contributed_by}</span>
            </div>
        </div>
    )


}

export default BeerCard