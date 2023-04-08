import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";



function SingleBeer(){

    const { beerId } = useParams();

    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(() => {
        axios
          .get(process.env.REACT_APP_APIURL + "/" + beerId)
          .then((response) => {
            console.log("response from API details", response.data);
            setBeerDetails(response.data);
          })
          .catch((e) => {
            console.log("error getting beer details from the API...", e);
          });
      }, [beerId]);


    return (
        <>
        { beerDetails ? (
        
            
            <div className="card" style={{width: 18 + "rem"}}>
            <img src={beerDetails.image_url} className="card-img-top" alt="..."/>
            <div className="card-body">
          
              <h2 className="card-text">{beerDetails.name}</h2>
              <p className="card-text">{beerDetails.tagline}</p>
              <p className="card-text">{beerDetails.first_brewed}</p>
              <p className="card-text">{beerDetails.attenuation_level}</p>
              <p className="card-text">{beerDetails.description}</p>
              <p className="card-text">{beerDetails.contributed_by}</p>
            </div>
          </div>
       
          

        ) : (
            "loading...."
        )




        }

</>
    )
}

export default SingleBeer