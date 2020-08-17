import React, { Component } from 'react';
import axios from 'axios';

class RandomBeer extends Component {
    
  constructor(props){
      super(props);
      this.state = { };
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    //const { params } = this.props.match;
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(responseFromApi => {
        //console.log(responseFromApi.data);
        const randomBeer = responseFromApi.data;
        this.setState(randomBeer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render(){
    return (
          <div>
            <div className="card mb-3" >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src = {this.state.image_url} class="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.name}</h5>
                    <p className="card-text"><small class="text-muted">{this.state.tagline}</small></p>
                    <p className="card-text">{this.state.first_brewed}</p>
                    <p className="card-text">{this.state.attenuation_level}</p>
                    <p className="card-text">{this.state.description}</p>
                    <p className="card-text"><small class="text-muted">{this.state.contributed_by}</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default RandomBeer;