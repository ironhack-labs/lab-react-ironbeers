import './App.css';
import React, { Component } from 'react';
import axios from "axios";
import { Link} from "react-router-dom";


class ListBeer extends Component {
state={
  allBeers: []
}

componentDidMount () {
  axios.get("https://ih-beer-api.herokuapp.com/beers").then(allBeers => {
    console.log(allBeers);

    this.setState({
      allBeers: allBeers.data
    })
  })
}

showBeers =()=>{
return this.state.allBeers.map(eachBeer => {
  return (
   <Link to={`/beers/${eachBeer._id}`}>
    <div>
      <div>
      <img src={eachBeer.image_url} width='50' ></img>
      </div>
      <div>
      <li>{eachBeer.name}</li>
      <p><strong>Created by:</strong>{eachBeer.contributed_by}</p>
      </div>
      </div>
      </Link>
  )
})
}



  render() {
    return (
      <div >
        all
        {this.showBeers()}
      </div>
    );
  }
}

export default ListBeer;