import React from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';


export class Beers extends React.Component {
  constructor() {
    super()
      this.state = {
      beers: []
    }
  }
 

  componentWillMount() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(res => {
        const beers = res.data;
        console.log(beers)
        this.setState({beers:beers});
      })
      .catch (err=>{
        console.log(err)
      })
  }

  render() {
    return (
      
      <div>
        { this.state.beers.map(beer =>{ 
         return (
          <div>
        <img style={{height:200}}src={beer.image_url} alt=""></img>
        <Link to={'/beers/' + beer._id}><h3>{beer.name}</h3></Link>
        <h4>{beer.tagline}</h4>
        <p>Created by: {beer.contributed_by}</p>
        </div>
         )
         })}
      </div>
      
    )
  }
}

export default Beers;
