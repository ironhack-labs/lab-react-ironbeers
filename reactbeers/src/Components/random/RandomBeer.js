import React, {Component} from 'react';
import '../../App.css';
import Home from '../../Components/home/home/Home'
import axios from 'axios'
class RandomBeer extends Component {
  state = {
    randomBeer: false,
  };
  componentWillMount(){

  }
  componentDidMount() {
    axios
      .get("https://sample-api-ih.herokuapp.com/random")
      .then(response => {
        console.log(response);
        this.setState({ randomBeer: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  showBeers() {
      return (
        <div class="col s12">
        <div class="card horizontal">
          <div class="card-image">
            <img className="eachPictureRandom" src={this.state.randomBeer.image_url}/>
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <div class="cardRandom">
              <h2>{this.state.randomBeer.name}</h2>
              <hr></hr>
              <h4>{this.state.randomBeer.tagline}</h4>
              <h5>{this.state.randomBeer.description}</h5>
              <h6>{this.state.randomBeer.contributed_by}</h6>
              <div className="Bottom">
              <p>{this.state.randomBeer.first_brewed}</p>
              <p>{this.state.randomBeer.attenuation_level}</p>
              </div>
              </div>
            </div>
            <div class="card-action">
              <a href="#">Check this beer out</a>
            </div>
          </div>
        </div>
      </div>
      )
  }
  render() {
    if (this.state.randomBeer !== false) {
      return (
        <div className="container-fluid">
          <Home />
          <h2>Random Beer</h2>
          <div className="row beers">
          {this.showBeers()}
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Home />
        </div>
      );
    }
  }
}

export default RandomBeer;
