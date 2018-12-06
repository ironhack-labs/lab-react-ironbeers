import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Beers extends Component {
  constructor(){
    super();
    this.state = { lisOfbeers: null };
}
getAllBeers = () =>{
  axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
  .then(resApi => {
    this.setState({
      lisOfbeers: resApi.data
    });
  });
};

componentDidMount() {
  this.getAllBeers();
  console.log(this.getAllBeers())
}

  render() {

    return (
    
        this.state.lisOfbeers ? 
          (<div>
              <div>
        <NavBar></NavBar>
    </div>
          <div>
          <br></br>
            { this.state.lisOfbeers.map((beer, index) => {
               return (
                <div key={beer._id}>
                  <Link to={`/beers/${beer._id}`}>
                    <h3>{beer.name}</h3>
                  </Link>
                  <p>{beer.tagline} </p>
                  <img src={`${beer.image_url}`} style={{width:'10%'}}></img>
                  <h5>{beer.contributed_by}</h5>
                  <br></br>
                </div>

              )})
            }    
          </div>
          <div style={{width: '40%', float:"right"}}>
              {/* <AddBeer getData={() => this.getAllProjects()}/> */}
          </div>
        </div>)
        : 
          (
          <p style={{margin: '20%'}}>Espera, hermano. Estamos recopilando la movida.</p>
        )
    )
  }
}
