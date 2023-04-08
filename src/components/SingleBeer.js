import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Col } from "antd";



export default function SingleBeer() {
    const [singleBeer, setSingleBeer]= useState(null)

    const {beerId}= useParams();

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_APIURL}/${beerId}`)
          .then((response) => {
            setSingleBeer(response.data);
          })
          .catch((err) => console.log("error getting beers from API", err));
      }, [beerId]);


const renderDetails = () => {

    return(
   
        <Col>
       <Card>
        <img src={singleBeer.image_url} alt={singleBeer.name} />
        <h3>{singleBeer.name}</h3>
        <p>{singleBeer.tagline}</p>
        <p>{singleBeer.first_brewed}</p>
        <p>{singleBeer.attenuation_level}</p>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
      

        </Card>
        </Col>
    )
}


    return (
     <>
        {singleBeer ? renderDetails() :<p>Loading details...</p> }
     </>
    )

}