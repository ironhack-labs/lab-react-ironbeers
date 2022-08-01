import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BeerCardDetailed from "./BeerCardDetailed";



function BeerDetails () {

    const {id} = useParams();

    const [details, setDetails] = useState([]);

    useEffect( () => {
      axios
        .get(process.env.REACT_APP_API_BASE_URL + 'beers/' + id)
        .then((response) => {
          // console.log(response.data);
          setDetails(response.data);
        })
        .catch((err) => {
          console.log(err)
        })
    });




    return (

        <>
        <h1>Beer Details</h1>
  
        {details.length === 0
          ? <p>loading...</p>
          :         <BeerCardDetailed data={details} />
        }
      </>


    )
}

export default BeerDetails;