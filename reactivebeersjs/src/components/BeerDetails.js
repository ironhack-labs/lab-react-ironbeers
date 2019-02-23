import React,{Component} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // props:props,
      theBeer: undefined
    };
  }

  componentDidMount() {
    // console.log(this.props);
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ theBeer: response.data });
      });
  }

  render() {
    // console.log(this.state.theBeer);
    return  (
      <div>
      {this.state.theBeer && ( 
      <div className="Beer-Card" key={this.state.theBeer._id}>
        <div className="Beer-Image-Box">
          <img className="Beer-Image" src={this.state.theBeer.image_url} />
        </div>

        <div className="Beer-Container">
          <h2>{this.state.theBeer.name}</h2>
          <p>{this.state.theBeer.tagline}</p>
          <p>{this.state.theBeer.description}</p>
        </div>
      </div>)
    }
    </div>
    );
  }
}

export default BeerDetails;
