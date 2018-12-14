import React, { Component } from "react";
 import { getRandomBeer } from "../../services/api";
 import { Link } from "react-router-dom";

 class RandomBeer extends Component {
   state = {
     beer: {}
   };

   componentWillMount = () => {
     getRandomBeer()
       .then(beer => {
         this.setState({ beer });
       })
       .catch(err => console.log(err));
   };

   render() {
     const { beer } = this.state;
     return (
       <div>
       
       </div>
     );
   }
 }

 export default RandomBeer;