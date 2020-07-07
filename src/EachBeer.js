
import React, { Component } from 'react';
import axios from 'axios';

class EachBeer extends Component {

    state = {
        beer: {}
      }
    
      async componentDidMount(){
    
        let res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)

        this.setState({ beer: res.data  });
    
      }
    
    
    render() {
        return (
            <div>
                {this.state.beer.name}
            </div>
        );
    }
}

export default EachBeer;