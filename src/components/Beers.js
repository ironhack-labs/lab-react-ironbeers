import axios from 'axios';
import React, { Component } from 'react';
import HomeButton from './HomeButton';
import {Link} from 'react-router-dom';
import Search from './Search'

class Beers extends Component {
state={
  beers:[]
}



componentDidMount(){
  axios.get('https://ih-beers-api2.herokuapp.com/beers')
  .then(response=>{
    console.log(response.data)
    this.setState({
      beers: response.data
    })
  })
}


allBeers =()=>{
  return this.state.beers.map(eachBeer=>{
    return(
<>


    <div key={eachBeer._id}>
      <img src={eachBeer.image_url} alt={eachBeer.name} width='50vw'/>
      <Link to={`/beers/${eachBeer._id}`}><h2>{eachBeer.name}</h2></Link>
      <p>{eachBeer.tagline}</p>
      <p>{eachBeer.contributed_by}</p>

    </div>
</>
    )

  })
}




  render() {
    return (
      <div>
        <HomeButton />
        <Search/>
        {this.allBeers()}
      </div>
    );
  }
}

export default Beers;
