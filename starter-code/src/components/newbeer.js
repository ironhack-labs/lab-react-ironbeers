import React, { Component } from "react";

class NewBeer extends Component{

  changeState = (event) => {
    this.props.name(event.target.name, event.target.value);
    console.log(event.target.name);
    console.log(event.target.value);
  }

  render(){
    return(
      <div>
        <h1>New Beer</h1>
        <input placeholder='Name' name='name' onChange={ this.changeState }></input>
        <input placeholder='Tagline' name='tagline' onChange={ this.changeState }></input>
        <textarea rows='6' cols='40' placeholder='Description' name='description' onChange={ this.changeState }></textarea>
        <input placeholder='First Brewerd' name='firstbrewerd' onChange={ this.changeState }></input>
        <input placeholder='Brewers Tips' name='brewerstips' onChange={ this.changeState }></input>
        <input placeholder='Attenuation Level' name='attenuationlevel' type='number' onChange={ this.changeState }></input>
        <input placeholder='Contibuted By' name='contibutedby' onChange={ this.changeState }></input>
        <button onClick={ this.props.button }>New</button>
      </div>
    );
  }
}

export default NewBeer;