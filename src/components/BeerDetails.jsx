import PropTypes from "prop-types";
import {Link} from "react-router-dom"; 

const BeerDetails = ({name, image_url,tagline, contributed_by, first_brewed , attenuation_level, description}) => {

    return <div>
        <img alt="" src={image_url}/>
        <h1>{name}</h1>
        <p> {tagline}</p>
        <p>contributed by: {contributed_by}</p>
        <p>{first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{description}</p>

       
    </div>
}

BeerDetails.propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired, 
    contributed_by : PropTypes.string.isRequired, 
    tagline: PropTypes.string.isRequired, 

}

export default BeerDetails;