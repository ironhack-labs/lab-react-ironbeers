import React, { Component } from 'react';

class BeerDetailed extends Component {
  render() {
  
    const allBeers = this.props.beerList;
    const theID = this.props.match.params.id;

    const theActualBeer = allBeers.find((eachB)=>{
        return eachB._id === theID
    })

    if (this.props.ready) {
      return (
     <div className="container">
       <div className="row">
        <div className="col-5">
         <img src= {theActualBeer.image_url} alt="image"/>
        </div>
        <div className="col-7">
          <h2>{theActualBeer.name}</h2>
          <h4>{theActualBeer.tagline}</h4>
          <p>Description: {theActualBeer.description}</p>
          <p>First brewed: {theActualBeer.first_brewed}</p>
          <p>Tips: {theActualBeer.brewers_tips}</p>
          <p>Contributed: {theActualBeer.contributed_by}</p>
          <p>Attenuation level: {theActualBeer.attenuation_level}</p>
        
        </div>
       </div>
     </div>
      );
    } else {
      return <h2>Loading ... </h2>;
    }
  }
}

export default BeerDetailed;