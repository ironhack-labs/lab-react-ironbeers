import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import './allbeers.css';

class AllBeers extends Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }
  }

showAllBeers = () =>{
  return this.props.allTheBeers.map((beer, index) => {
    if(this.state.editing !== index){
      return (
        <div key={beer._id} className="beer-container">
          <div>
            <img className="beer-left" src={beer.image_url} alt={beer.name} />
          </div>
          <div className="beer-right">
            <p className="beer-name"><Link to={`/beers/${beer._id}`}>{beer.name}</Link></p>
            <p className="beer-tagline">{beer.tagline}</p>
            <p className="beer-contributor">{beer.contributed_by}</p>
          </div>
        {/* <button onClick={()=>{this.changeEditing(index)}} >Edit This Beer</button>
        <button onClick = {()=>{this.deleteBeer(beer._id)}} >Delete This Beer</button> */}
      </div>
      )
    } 
    // else {
    //     return(
    //         <EditBeer 
    //         resetEditingSituation = {this.resetEdit} 
    //         theBeer = {beer}
    //         getAllTheBeersInAppJS = {this.props.getData}
    //          />
    //     )
    // }
    }
  )
}

  render(){
    if(this.props.ready)    
      return (
        <div className="wrapper">
          <div>
          <Navbar />
          </div>
          <div>
            <div>
            {this.showAllBeers()}
            </div>
          </div>
        </div>
      )
    else
    return(<h3>loading...</h3>)
  }
}

export default AllBeers;