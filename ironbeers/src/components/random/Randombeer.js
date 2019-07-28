import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default class App extends React.Component {
  state = {
    randomBeer: '',
  }

  randoBeer = () => {
    axios.get(` https://sample-api-ih.herokuapp.com/random`)
    .then(res => {

      this.setState({
        randomBeer: res.data,
      })
    }).catch((err)=>{
        console.log(err);
    })
  }


  componentDidMount() {
    this.randoBeer()
  }
  
  sendBeerInfo = () => {
    this.props.getBeerInfo(this.state.randomBeer)
  }


render(){
   
    return (
    <div>
      <Link to={`/SingleBeer/${this.state.randomBeer._id}`} onClick={this.sendBeerInfo}>
        <img src={this.state.randomBeer.image_url}/>
        <h4>{this.state.randomBeer.name}</h4>
        <p>{this.state.randomBeer.description}</p>
      </Link>

    </div>

  
 
    );
  }
  }
  