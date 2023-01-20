import { Link, useParams } from "react-router-dom"

export default function Beer(props) {
    
    const { beerId } = useParams();

    const details = props.beersList?.find((beerDetails) => {
        // eslint-disable-next-line
        return beerDetails._id == beerId
    });

    const renderDetails = () => {
        return (
            <div>
                <Link to={details._id}>{details.image_url
                    ? <img src={details.image_url} alt={details.name} />
                    : <img src="https://via.placeholder.com/150"
                        alt={details.name} />}<br /></Link><br />
                {details.name}<br />
                {details.tagline} <br />
                {details.first_brewed} <br />
                {details.attenuation_level}
                {details.description}<br />
                {details.contributed_by}<br />
            </div>
        )
    }
    
    return (
        <>
            {details && renderDetails()}
            <Link to="/beers">Back</Link>
        </>
    )
}