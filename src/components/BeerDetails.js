import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


function BeerDetails() {

    const {id} = useParams()
    const [detailsBeer, setDetailsBeer] = useState(null)

    
    
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response)=>{
            console.log("response details", response.data)
            setDetailsBeer(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])


   const renderDetails = ()=>{

    return(
        <>
            <img src={detailsBeer.image_url} alt={detailsBeer.name}/>
            <h3>{detailsBeer.name}</h3>
            <p>{detailsBeer.tagline}</p>
            <p>{detailsBeer.first_brewed}</p>
            <p>{detailsBeer.attenuation_level}</p>
            <p>{detailsBeer.description}</p>
            <p>{detailsBeer.contributed_by}</p>
            <Link to={`/beers`}> Back to list of beers</Link>
        </>
    )

   }

  return (
    <>
      <header>
        <Link to={"/"}> Home</Link>
      </header>
      
      <section>
        {detailsBeer 
        ? renderDetails()
        : <h2>Loading....</h2> }
      </section>
    </>
  );
}

export default BeerDetails