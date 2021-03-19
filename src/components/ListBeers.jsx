import React from 'react'

import axios from "axios";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';




class ListBeers extends React.Component {

    state = {
        beers: null
      };
    
    componentDidMount(){
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
    
          this.setState({beers : response.data })
    
        })
        .catch((error) => {
          console.log(error)
        });
    };



    render(){
    return (
        <div>

            <NavBar></NavBar>

            <div className="beer">
                {this.state.beers && this.state.beers.map(beer => {
                    return (<div key={beer._id}>
                        <img src={beer.image_url}></img>
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                        <Link to={`/beers/${beer._id}`}>Read more</Link>
                    </div>
                    )
                    
                })}

            </div>


        

            
        </div>
    )

    }
}

export default ListBeers
