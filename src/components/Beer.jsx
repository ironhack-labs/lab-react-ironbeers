import React from 'react';
import axios from 'axios';

class Beer extends React.Component {
  state = {
    beer: {},
  };
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      const singleBeer = response.data.find(
        (el) => el._id === this.props.match.params.id
      );
      this.setState({ beer: singleBeer });
    });
  }

  // componentDidUpdate(prevProps) {
  //     if(!equal(this.props.user, prevProps.user)) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
  //     {
  //       this.updateUser();
  //     }
  //   }

  render() {
    return (
      
        <div className="col">
          
          <div className="card"  key={this.state.beer._id}>
            <img
              className="card-img-top mx-auto beers"
              src={this.state.beer.image_url}
              alt={this.state.beer.name}
            ></img>
            <h5 className="card-title">{this.state.beer.name}</h5>
            <p className="card-text">{this.state.beer.tagline}</p>
            <p>{this.state.beer.first_brewed}</p>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>
              <small>
                <strong>Created by:</strong> {this.state.beer.contributed_by}
              </small>
            </p>
          </div>
        
        </div>
      


// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by



    );
  }
}
export default Beer;
