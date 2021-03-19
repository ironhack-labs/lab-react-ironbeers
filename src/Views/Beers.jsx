import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'


class Beers extends React.Component {

state = {
    beers: [],
}

componentDidMount(){
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        //   console.log(response.data);
          this.setState({beers: response.data})
      })
      .catch((error) => console.log(error));
}


    render(){
        return (
        <div>
            <header>
        <NavLink to="/">Back HomePage</NavLink>
            </header>
            <h1>Beers:</h1>
            {this.state.beers.map((beer)=>{
                return (
                  <div key={beer._id}>
                    <img src={beer.image_url} alt="beer-img" />
                    <p>Name: {beer.name}</p>
                    <p>Tagline: {beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <NavLink to={`/beers/${beer._id}`}>See this Beer Details</NavLink>
                  </div>
                );
            })}

        </div>
    )
}
    }
    

export default Beers
