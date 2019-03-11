import React, {Component} from 'react';
import axios from 'axios';


class RandomBeer extends Component{

state={
  randomBeer:{}
}


componentDidMount(){
axios.get("https://ironbeer-api.herokuapp.com/beers/random")
.then(res=>{
  this.setState({
    randomBeer:res.data[0]
  })
})
}




  render(){

    return(
        <div style={{width:"500px" , margin:"0px auto"}}>
         <img  src={this.state.randomBeer.image_url} style={{width:"100px"}}></img>
         <h2>{this.state.randomBeer.name} </h2>
         <p>{this.state.randomBeer.description}</p>
        </div>
    )
  }
}


export default RandomBeer;