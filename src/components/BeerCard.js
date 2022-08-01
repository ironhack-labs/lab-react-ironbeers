import { Link } from "react-router-dom";

function BeerCard (props) {

    // console.log(props);

    return (
        <div>
            <img src={props.data.img} alt=''/>
            <h1> {props.data.name}</h1>
            <p> {props.data.tagline} </p>
            <p> {props.data.contributed_by} </p>
            <Link to={props.data._id}> See more Details </Link>
        </div>
    )
}

export default BeerCard;