import React, { Component } from 'react';
import axios from 'axios';




class AllBeers extends Component {

state ={
  beers:[],
}

componentDidMount = ()=>{

  axios.get("https://ironbeer-api.herokuapp.com/beers/all")
  .then(respons=>{
    this.setState({
      beers:respons.data
    })
  })
}

ShowAllBeers=()=>{

  const listBeer = this.state.beers.map((eachBeer,i)=>{
    
    return <div key={i} style={{width:"500px" , margin:"0px auto" }} >

 
      <h1>{eachBeer.name}</h1>
      <img style={{width:"50px"}} src={eachBeer.image_url}></img>
      <p>{eachBeer.description}</p>
      
            </div>
    
  })
  return listBeer
}



  render() {
    console.log("get all data from API",this.state.beers)
    return (
      <div className="Home">
     {this.ShowAllBeers()}
      </div>
    );
  }
}

export default AllBeers;
