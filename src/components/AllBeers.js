import React,{Component} from "react";
import BeersService from "../services/beers.service";
import Header from "./Header";
import OneBeer from './OneBeer';

class Beers extends React.Component{
constructor(props){
super(props);
this.state = {
beers: []

};

}
beersService = new BeersService();

refreshState(){
  this.beersService.getBeers()
  .then(beers =>{
    console.log(beers);
    this.setState({beers: beers.data});
  })
  .catch (err => console.error(err))
}

componentDidMount(){
  this.refreshState();
}

displayBeers(){
  const {beers} = this.state;
  return beers.map(beer=>{
    return(
      <OneBeer
      refreshState={() => this.refreshState()} key={beer._id} {...beer} />
    )
  })
};

render(){
  return(
    <div>
      <Header />
      {this.displayBeers()}
    </div>
  )
}

}


export default Beers;
