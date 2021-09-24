import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";



function BeerDetails(props) {
    const [beerDetails, setBeerDetails] = useState("")

    //Deco
    const {name, image_url, tagline, first_brewed, attenuation_level, description, contributed_by} = beerDetails


    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params._id}`)
          .then((object)=>{
            console.log('This is:', object.data)
            setBeerDetails(object.data)
          })
      }, [props.match.params._id]) 
      

    return (
      <div className="NewBeer row justify-content-center">
        <Navbar/>
        <div className="card col-3">
        <img src={image_url} alt={name}/>
        <h3>{name} </h3>
        <p>{tagline}</p>
        <p>{first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
        </div>
      </div>
    );
  }
  export default BeerDetails;