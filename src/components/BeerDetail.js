import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function BeerDetail(props) {

    const { beerId } = useParams();
    const [beersArr, setBeersArr] = useState([]);

    useEffect(() => {
        axios.get(`process.env.REACT_APP_API_URL/${beerId}`)
            .then(response => {
                props.callbackToUpdateList()
                setBeersArr(response.data);
            })
            .catch(e => console.log("Error getting beers from API", e))
    }, []);

    if (!beersArr) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>One single beer</h1>
            <img src={props.image_url} alt={props.name} />
            <h4>{props.name}</h4>
            <h4>{props.tagline}</h4>
            <p>First Brewed: {props.first_brewed}</p>
            <p>Attenuation Level: {props.attenuation_level}</p>
            <p>Description: {props.description}</p>
            <p>Contributor: {props.contributed_by}</p>
        </div>
    )
}

export default BeerDetail;