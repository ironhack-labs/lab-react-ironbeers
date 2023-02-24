import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const imgURL = "https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"



function BeerDetailsPage({beers}) {
    const [singleBeer, setSingleBeer] = useState({})

    const { id } = useParams()

    useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then (response => {
    console.log(response.data)
    setSingleBeer(response.data)
    })
    },{})
  
  
    return ( 
        <div>
        <header>
        <Link to="/"> <img src={imgURL} alt="header" style={{width: "100vw"}} /></Link>
       </header>
       <div key={singleBeer._id} className="single-beer">
          <img src={singleBeer.image_url} alt="" style={{height: "30vh"}} className="beer-picture"/>
          <div className="single-beer-description">
          <div className="beer-boxes">
          <div className="box-left">
          <h3>{singleBeer.name}</h3>
          <p>{singleBeer.tagline}</p>
          </div>
          <div className="box-right">
          <p>{singleBeer.attenuation_level}</p>
          <h6>{singleBeer.first_brewed}</h6>
          </div>
          </div>
          <p>{singleBeer.description}</p>
          <h6>{singleBeer.contributed_by}</h6>
          </div>
      </div>
       </div>

     );
}

export default BeerDetailsPage;