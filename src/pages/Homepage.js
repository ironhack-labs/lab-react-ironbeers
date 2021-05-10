import React, {Component} from "react";

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
      <a href="/new">Create Beer</a>
    </div>
  )
}

}

export default Homepage;

