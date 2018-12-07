import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class OneBeer extends Component {

  constructor(props){
    super(props);
    this.state = {oneBeer:null};
}

 componentDidMount(){
    this.getOneBeer();
}

 getOneBeer = () => {
    
  const { params } = this.props.match;
    console.log(params);
    
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
    .then( resOfApi =>{
        const oneBeer = resOfApi.data;
        this.setState({...this.state, oneBeer});
    })
   
}

 render(){
   const beer = this.state.oneBeer !== null? <div>
   <img style={{width: '10%'}} src={this.state.oneBeer.image_url} alt=""/>
   <h1>{this.state.oneBeer.name}</h1>
   <p>{this.state.oneBeer.tagline}</p>
   <p>{this.state.oneBeer.first_brewed}</p>
   <p>{this.state.oneBeer.attenuation_level}</p>
   <p>{this.state.oneBeer.description}</p>
   <p>{this.state.oneBeer.contributed_by}</p>
   
   
   <Link to={'/beers'}>Back to Beers</Link>
 </div> : <p>Loading...</p>

  return(
    beer
  )
}
}