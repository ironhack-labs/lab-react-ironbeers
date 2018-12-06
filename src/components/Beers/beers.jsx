import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Beers extends Component {
  constructor(props) {
    super(props);
    this.state ={
        beersList: []
    }
  }

  getAllBeers = () =>{
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then( res => {
        this.setState({beersList: res.data})
    })
    .catch( error => console.log(error) )

  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div className="Beers">
       <Link to={`/`}>Home</Link>
        <h1>All beers</h1>
        {this.state.beersList.map((beer,index)=>{
            return(
                <Link key={index} to={`/viewBeer/${beer._id}/${1}`}><p>{beer.name}</p></Link>
            )
            })
        }
      </div>
    );
  }
}

export default Beers;
