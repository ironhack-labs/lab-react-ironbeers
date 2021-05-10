import React, {Component} from "react";
import { Router} from 'react-router-dom';

class Homepage extends Component{
constructor(props){
  super(props);
  this.state= {

  }
}
render(){
  return (
    <div>
      <a href="/beers">Beers</a>
      <a href="/random-beer">Random Beer</a>
      <a href="/new-beer">Create Beer</a>
    </div>
  )
}

}

export default Homepage;

