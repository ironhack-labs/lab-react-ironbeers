import { Link } from "react-router-dom";
import { useEffect,  } from 'react'
import axios from 'axios'
import beerPic from "../src/assets/beer.png"

export default function RandomBeer(props) {
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
          .then(response => {
            props.setRandomBeer(response.data)
          })
          .catch(err => console.log(err))
        return () => {
          // this would happen when the component is unmounted
        }
    }, [])
    return <>
    <div className="navbar-home">
      <Link to="/"><img className="home-img"src={beerPic} alt=""/> </Link>
     </div>
        <p className="allbeers-container">
         <img src={props.randomBeer.image_url} className="beer-img" alt=""/>
          <div>
            <h3> {props.randomBeer.name}</h3>
            <p> {props.randomBeer.tagline}</p>
            <p> {props.randomBeer.description}</p>
            <p> {props.randomBeer.contributed_by}</p>
            <p> Created by: {props.randomBeer.name}</p>
          </div> 
        </p>
    </>
};
