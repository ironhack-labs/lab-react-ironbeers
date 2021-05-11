import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Beers extends React.Component {


  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response);
        this.setState({
          beers: response.data
        })
        console.log(this.state.beers)
      })
      .catch(err => console.log(err))
  }
   
    render() {

      const renderedBeers = this.state.beers.map(beer => (
             <div key={beer._id}>
               <img src={beer.image_url} style={{width:"100px", height:"200px"}}/>
               <Link to={`/Beers/${beer._id}`} beer={this.state.beer}><h2>{beer.name}</h2></Link>
               <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
             </div>
           ))
         
       

        return (
            <div>
                <header><Link to="/">Home</Link></header>
                <div>
                    {renderedBeers}
                </div>
            </div>
        )
    }
}
