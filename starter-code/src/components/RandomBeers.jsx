import React from "react";
import axios from "axios";

export default class RandomBeer extends React.Component {
 constructor() {
   super();
   this.state = {
     beerRng: {}
   };
 }

 getRandomBeer = () => {

   axios
     .get(`https://ironbeer-api.herokuapp.com/beers/random`)
     .then(beer => {
       this.setState({ beerRng: beer.data[0] });

     })
     .catch(error => console.log(error));
 };

 componentWillMount() {
   this.getRandomBeer();
   
 }
 render() {
   let {image_url, name,tagline,first_brewed,attenuation_level,description,contributed_by } = this.state.beerRng;
   return (
     <div>
       <div>
         <img height="300px" src={image_url} alt={name} />
         <h1>{name}</h1>
         <h2>{attenuation_level}</h2>
         <p>{tagline}</p>
         <p>{first_brewed}</p>
         <p>{description}</p>
         <p>{contributed_by}</p>
       </div>
     </div>
   );
 }
}