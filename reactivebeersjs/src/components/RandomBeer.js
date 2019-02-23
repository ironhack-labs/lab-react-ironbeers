import React,{Component} from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      theBeer: undefined
    };
  }

  componentDidMount() {
    console.log(this.state.theBeer);
    console.log("Get-Request")
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/random")
      .then(response => {
        console.log(response);
        this.setState({ theBeer: response.data[0] });
      });
  }

  render() {
    // console.log("Render!")
    // console.log(this.state.theBeer);
    return  (
      <div>
      {this.state.theBeer && ( 
      <Redirect to={`/beers/${this.state.theBeer._id}`}/>)
      // <h1>{this.state.theBeer.name}</h1>)
      }
    </div>
    );
  }
}

export default RandomBeer;
