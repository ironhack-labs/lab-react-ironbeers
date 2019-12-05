import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(allBeers => {
      this.setState({
        ...this.state,
        beers: allBeers.data
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <section className='d-flex flex-column align-items-center'>
        {this.state.beers.map((beer, idx)=>{
return (
    <div className="card mb-3 p-3 col-md-6"  key={idx}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={beer.image_url} className="card-img" alt={beer.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <Link to={"/"+beer._id}><h5 className="card-title">{beer.name}</h5></Link>
        <p className="card-text">{beer.tagline}</p>
        <p className="card-text"><small className="text-muted">{beer.contributed_by}</small></p>
      </div>
    </div>
  </div>
</div>
)
        
    })}
    </section>
      </React.Fragment>
    );
  }
}
