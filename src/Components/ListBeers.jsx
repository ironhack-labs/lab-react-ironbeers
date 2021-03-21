import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListBeers extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        this.setState({ beers: response.data});
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {

    return (
      <div>
        
        {this.state.beers.map((beer) => (
            <Link style={{ textDecoration: 'none', color:"black"}} key={beer._id} to={`/beers/${beer._id}`}>
          <div style={{display:"flex", flexDirection:"row", textAlign:"left", padding: "10px", borderBottom: "1px solid grey"}} key={beer._id}>
              <div style={{display:"flex", flexDirection:"row", width:"100vw", justifyContent:"center"}}>
            <img style={{height:"150px"}} src={beer.image_url} alt="" />
            </div>
            <div style={{padding: "10px"}}>
            <p style={{fontWeight:"bold"}}>{beer.name}</p>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            </div>
          </div>
          </Link>
        ))} 
        
      </div>
    );
  }
}

export default ListBeers;