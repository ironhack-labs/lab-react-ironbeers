import React, { Component } from "react";

class NewBeer extends Component{
  render(){
    return(
      <div>
        <h1>New Beer</h1>
        <input placeholder='Name' name='Name'></input>
      </div>
    );
  }
}

export default NewBeer;