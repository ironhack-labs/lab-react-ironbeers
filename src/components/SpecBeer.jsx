import React from 'react';
import NavMain from './NavMain';
import BeersMoreDetails from './BeersMoreDetails';
import beerAPI from "../api/beerAPI";

class SpecBeer extends React.Component {
state = {
    beer: null,
}

 componentDidMount() {
     console.log()
     beerAPI.getOneBeer(this.props.match.params.id)
     .then((apiResponse) => {
         console.log(apiResponse.data);
         this.setState({ beer: apiResponse.data});
     }).catch(err => console.log(err));
 }

  render() {
      console.log("Je suis dans specBeer")
     return (
      <div>
        <NavMain />
        {this.state.beer && (
         <BeersMoreDetails key={this.state.beer._id} beer={this.state.beer} />
        )}
      </div>
    );
  }
}

export default SpecBeer;
