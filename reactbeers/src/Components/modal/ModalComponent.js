import React, {Component} from 'react';
import '../../App.css';
import Home from '../../Components/home/home/Home'
import axios from 'axios';
import { Link } from 'react-router-dom';
class ModalBeer extends Component {
  
  state={
    theBeer: false
  }
  
  componentWillMount(){

  }
  componentDidMount(){
    axios.get("https://sample-api-ih.herokuapp.com")
    .then((response)=>{
      let beer = 0;
      response.data.map((e)=>{
       if(this.props.match.params.id === e._id){
        beer = e;
       }
      })
      this.setState({theBeer:beer})
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  showBeers() {
    return (
      <div class="col s12">
      <div class="card horizontal">
        <div class="card-image">
          <img className="eachPictureRandom" src={this.state.theBeer.image_url}/>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <div class="cardRandom">
            <h2>{this.state.theBeer.name}</h2>
            <hr></hr>
            <h4>{this.state.theBeer.tagline}</h4>
            <h5>{this.state.theBeer.description}</h5>
            <h6>{this.state.theBeer.contributed_by}</h6>
            <div className="Bottom">
            <p>{this.state.theBeer.first_brewed}</p>
            <p>{this.state.theBeer.attenuation_level}</p>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    )
}
  render(){
  if (this.state.theBeer !== false) {
    return (
      <div className="container-fluid">
        <Home />
        <button><Link exact to="/allBeers">Go back</Link></button>
        <h2>Your Beer</h2>
        <div className="row beers">
        {this.showBeers()}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Home />
        <button><Link exact to="/allBeers">Go back</Link></button>
      </div>
    );
  }
}
}
export default ModalBeer;
