import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const BeerCard = ({name, image_url,tagline, contributed_by, _id}) => {
    return <div>
        <img alt="" src={image_url}/>
        <h1>{name}</h1>
        <p> {tagline}</p>
        <p>contributed by: {contributed_by}</p>
        <Link to= {`/beer/${_id}`}> Beer Details  </Link>
    </div>
}

BeerCard.propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired, 
    contributed_by : PropTypes.string.isRequired, 
    tagline: PropTypes.string.isRequired, 

}

export default BeerCard;
