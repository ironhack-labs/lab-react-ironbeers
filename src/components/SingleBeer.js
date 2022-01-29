import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SingleBeer = () => {
    const { id } = useParams();
    console.log(id)

    const [beerDetail, setBeerDetail] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
          setBeerDetail(response.data);
          console.log(response.data)
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
      }
      fetchData();
      // setLoading(false);

    },[id]);

    if (error) {
        return (
            <h1>Ups!! Something went wrong!</h1>
        )
    }

    if (loading) {
        return (
            <p>Looking for your beers...</p>
        )
        
    }

    if(!beerDetail) {
        return (
            <p>Ups! No beer...</p>
        )
    }


    return (
        <Fragment>
            <div  key={beerDetail._id}>
            <img src={beerDetail.image_url} alt="beer"/>
            <div>
              <h2>{beerDetail.name}</h2>
              <h2>Level: {beerDetail.attenuation_level}</h2>
              <p>{beerDetail.tagline}</p>
              <p>First brewed: {beerDetail.first_brewed}</p>
              <p>{beerDetail.description}</p>
              <p>{beerDetail.contributed_by}</p>
            </div>
          </div>
        </Fragment>
        
    )
}

export default SingleBeer;