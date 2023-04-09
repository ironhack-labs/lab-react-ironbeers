import { useEffect, useState } from "react"
import axios from "axios";
import { Card, Col } from "antd";


export default function RandomBeer(){

const [randomBeer, setRandomBeer] = useState(null);



useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_APIURL}/random`)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => console.log("error getting random beer from API", err));
  }, []);


const renderDetails = () => {

return(

    <Col>
   <Card>
    <img src={randomBeer.image_url} alt={randomBeer.name} />
    <h3>{randomBeer.name}</h3>
    <p>{randomBeer.tagline}</p>
    <p>{randomBeer.first_brewed}</p>
    <p>{randomBeer.attenuation_level}</p>
    <p>{randomBeer.description}</p>
    <p>{randomBeer.contributed_by}</p>
  

    </Card>
    </Col>
)
}


return (
 <>
    {randomBeer ? renderDetails() :<p>Loading details...</p> }
 </>
)

}


