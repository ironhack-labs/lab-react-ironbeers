import React from 'react';
import axios from 'axios';


class Beers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beerList: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beerList: response.data,
        });
      })
      .catch((e) => {
        console.log('Error', e)
      })
  }

  render() {

    return (
      <div>

        {/* <p>Number of beers in our system: {this.state.beerList.length} </p> */}
      </div>
    )
  }
}

export default Beers;
