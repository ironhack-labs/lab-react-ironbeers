import {useParams} from "react-router-dom";
const API_URL="https://ih-beers-api2.herokuapp.com/beers";
import axios from "axios";
import { useState, useEffect } from "react";
import "../App.css";
import { Card, Divider} from "antd";

function BeerDetailsPage() {
    const {beerId} = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/${beerId}`).then((response)=>{
            setDetails(response.data);
            console.log(details)
        }).catch(error=>console.log(error))
    }, [])
    
    return(
        <Card>
            <Card>
                <Divider>{details.name}</Divider>
                <Divider>{details.tagline}</Divider>
                <Divider>{details.contributed_by}</Divider>
                <Divider>{details.first_brewed}</Divider>
                <Divider>{details.attenuation_level}</Divider>
            </Card>
            <Divider><img id="details-img"src={details.image_url}/></Divider>
        </Card>
    )
}

export default BeerDetailsPage;
