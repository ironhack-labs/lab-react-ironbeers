import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import getBeerById from "../../services/getBeerById";

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneBeer: []
    }
  }

  async componentDidMount() {
    try {
      const oneBeer = await getBeerById(this.props.match.params.id)
      this.setState({
        oneBeer: oneBeer
      })
      console.log(this.state.oneBeer)
    }
    catch(err) {
      console.log(err);
      throw(err);
    }
  }  
  render() { 
    console.log(this.props.match.params.id);    
    console.log(this.state.oneBeer);
    const oneBeer = this.state.oneBeer; 
    
    const beerCard = (
      <div key={oneBeer._id}>
      <img src={oneBeer.image_url} alt=""></img>  
      <p>{oneBeer.name}</p>
      <p>{oneBeer.tagline}</p>
      <p>{oneBeer.first_brewed}</p>
      <p>{oneBeer.attenuation_level}</p>
      <p>Descripton level: {oneBeer.description}</p>
      <p>Created by: {oneBeer.contributed_by}</p>
      </div>
    ) 

    return (
      <div>
        <Navbar />
        <p>Single Beer</p>
        {beerCard}
      </div>
    )
  }
}

export default SingleBeer
