import React from 'react';
import axios from 'axios';
import '../App.css';

class SingleBeer extends React.Component {
  
  state = {
    beer: {}
  }
  
  // you can access single item directly from the API by entering id; using different api endpoint to get single beer
  //check the conole.log response data, seeing what we really need
  //always write "this." in class, setState is given by React.Component
  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
      .then(response => {
        console.log(response)

        this.setState({
          beer: response.data
        })
      })
  }

  render() {
    return (
      <div>
        <h2>single beer</h2>
        <div>
          <img src={this.state.beer.image_url} alt="" style={{width:"100px"}}/>
          {this.state.beer.name}
          {this.state.beer.tagline}
          {this.state.beer.contributed_by}
          {this.state.beer.first_brewed}
          {this.state.beer.description}
        </div>
      </div>
    );
  }
}


export default SingleBeer;
