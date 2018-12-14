import React, { Component } from "react";
 import { getBeerDetail } from "../../services/api";
 import { Link } from "react-router-dom";

 class BeerDetail extends Component {
   state = {
     beer: {}
   };

   componentWillMount = () => {
     const { id } = this.props.match.params;
     getBeerDetail(id)
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

 export default BeerDetail;