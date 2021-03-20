import React from 'react';
import axios from 'axios';

class SingleBeer extends React.Component {
  state = {
    beer: {},
  };

  componentDidMound() {
    const id = this.props.match.params.beerId;
    console.log(id);
    console.log('hello');
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        // console.log('this is my one beer', response.data);
        this.setState({ beer: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // if (this.state.beer === null) {
    //   return <div>Loading...</div>;
    // }
    return (
      <div>
        <p>my page</p>
        <p>{this.state.beer.name}</p>
      </div>
    );
  }
}
export default SingleBeer;
