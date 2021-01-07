import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

class Beers extends React.Component {
    state = {
        allBeers : []
    }
   
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((responseFromApi) => {
        console.log("index 1",responseFromApi.data);
          this.setState({
            allBeers: responseFromApi.data,
          });
        });
      }

render () {
    return (
        <div >
          <h1>All beers</h1>
          <NavLink exact to="/">Maison logo</NavLink>
          {this.state.allBeers.map(beer => {
            return (

                <div className="card" key={beer._id}>
                    <Link className="flex" to={`/beers/${beer._id}` }>
                <img src={beer.image_url} alt=""/>
                <div className="content">
                    <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <p>{beer.contributed_by}</p>   
                </div>
                </Link>
            </div>
            )
          })}
         
    
        </div>
      );
}
  
};

export default Beers;