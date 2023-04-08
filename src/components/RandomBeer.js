import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, } from "react";
import Header from "./Header";




function RandomBeer(){

    const [beerDetails, setBeerDetails] = useState(null)

    useEffect(() => {
        axios
          .get(process.env.REACT_APP_APIURL + "/random" )
          .then((response) => {
            console.log("response from API details", response.data);
            setBeerDetails(response.data);
          })
          .catch((e) => {
            console.log("error getting beer details from the API...", e);
          });
      }, []);


    return (
        <>
        <Header></Header>
        { beerDetails ? (
        
            <div className="containe text-center ">
                <div className="row align-items-center">
                    <div className="col-3">

            <div classNameName="card" style={{width: 18 + "rem"}}>
            <img src={beerDetails.image_url} classNameName="card-img-top" alt="..."/>
            <div classNameName="card-body">
          
              <h2 classNameName="card-text">{beerDetails.name}</h2>
              <p classNameName="card-text">{beerDetails.tagline}</p>
              <p classNameName="card-text">{beerDetails.first_brewed}</p>
              <p classNameName="card-text">{beerDetails.attenuation_level}</p>
              <p classNameName="card-text">{beerDetails.description}</p>
              <p classNameName="card-text">{beerDetails.contributed_by}</p>
            </div>
            </div>
          </div>
          </div>
          </div>
       
   

        ) : (
            "loading...."
        )




        }

</>
    )
}

export default RandomBeer