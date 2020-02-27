import React from "react";
import Beers from '../Beers/Beers.js'


export default class ListOfBeers extends React.Component {

    // componentDidMount = () =>{
    //    console.log(this.props.beers)
    //   }

  render(){
    return(
      <div className="list">
        {this.props.beers.map((beer)=> (
            <Beers _id={beer._id} image_url={beer.image_url} name={beer.name} tagline={beer.tagline}></Beers>
        ))}
      </div>
    )
  }
}

  

