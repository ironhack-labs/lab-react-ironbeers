import React from 'react';
import Beer from './Beer';
import axios from 'axios';
import '../App.css';

//send http request in the component that needs data
//REACT calls componentDidMount() when the component is ready to request data
//axios library sends http request to the API endpoint we put in
class BeersList extends React.Component {

  state = {
    beers: []
  }
  
  //check the conole.log response data, seeing what we really need
  //always write "this." in class, setState is given by React.Component
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response)

        this.setState({
          beers: response.data
        })
      })
  }

  //key needs to be in the outest element/layer, so react can recognise it
  render() {
    const beersList = this.state.beers.map((beer, index) => {
      return (
        <div key={beer._id}>
          <Beer
            id={beer._id}
            image_url={beer.image_url}
            name={beer.name}
            tagline={beer.tagline}
            contributed_by={beer.contributed_by}
          />
        </div>
      )
    })

    return (
      <div>
        <h2>Beers List</h2>
        {beersList}
      </div>
    );
  }
  
}

export default BeersList;
