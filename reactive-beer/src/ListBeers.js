import './App.css';
import React, { Component } from 'react';
import axios from "axios";
import { Link} from "react-router-dom";
//import style compon3ents


class ListBeer extends Component {
state={
  allBeers: []
}

componentDidMount () {
  axios.get("https://ih-beer-api.herokuapp.com/beers").then(allBeers => {
    console.log(allBeers);

    this.setState({
      allBeers: allBeers.data
    })
  })
}

showBeers =()=>{
return this.state.allBeers.map(eachBeer => {
  return (
   <Link to={`/beers/${eachBeer._id}`} style={{textDecoration: "none"}}>
    <div style={{
      display: "flex",
      margin:"10px",
      borderBottom: "1px solid black",
      padding: "10px"
      
    }}>
      <div style={{
        padding: "0 15px",
        
      }}>
      <img src={eachBeer.image_url} width='50' ></img>
      </div>
      <div style={{
          color: "black",
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center"
        
      }}>
      <h1>{eachBeer.name}</h1>
      <h2 style={{
        color: "lightgray"
      }}>{eachBeer.tagline}</h2>
      <p>{eachBeer.contributed_by}</p>
      </div>
      
      </div>
      </Link>
  )
})
}



  render() {
    return (
      <div >
        {this.showBeers()}
      </div>
    );
  }
}

export default ListBeer;