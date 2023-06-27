import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeers() {

    const [beersArr, setBeersArr] = useState(null);

    useEffect(() => {
      getBeersFromApi();
    }, []);


    const getBeersFromApi = () => {
      axios.get(`${process.env.REACT_APP_API_URL}/beers`)
        .then(response => {
            setBeersArr(response.data);
        })
        .catch(e => console.log(e))
    }

    const renderListOfBeers = () => {
        if(beersArr === null){
          return <p>loading....</p>;
        } else {
          return beersArr.map((beerObj) => {
            return (
              <div key={beerObj._id} className="character box">
                <img src={beerObj.image_url} alt="beer" className="img"/> <br />
                Name: {beerObj.name} <br />
                Tag Line: {beerObj.tagline} <br />
                First Brewed: {beerObj.first_brewed} <br />
                Description: {beerObj.description} <br />
                Attenuation Level: {beerObj.attenuation_level} <br />
                Brewers Tips: {beerObj.brewers_tips} <br />

                <Link to={`/beers/${beerObj.id}`}>More details</Link>
              </div>
            )
          })
        }
      }


    return(
        renderListOfBeers()
        
        



    )
}

export default AllBeers;