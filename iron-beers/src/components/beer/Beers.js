import React, {Component} from 'react';
import axios from 'axios';
import Beer from './Beer';

class Beers extends Component {
    constructor(props){
        super(props)
        this.state = {
            beers: []
        }
    }
    componentDidMount(){
        axios.get(`https://api.punkapi.com/v2/beers`)
        .then(responseFromApi => {
          this.setState({
            beers: responseFromApi.data
          })
        })
    
    }
  render(){
      const {beers} = this.state;
console.log(beers)

    return (
      <div>
     
      
          {beers.map(beer => <Beer {...beer} detail={`/beers/${beer.id}`} />)}
      
      </div>
    );
  }
}

export default Beers;
