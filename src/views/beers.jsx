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
          <div className="home screenl"><NavLink exact to="/" className="link"><i class="fas fa-home" ></i></NavLink></div>
          
          {this.state.allBeers.map(beer => {
            return (
<div>   
                <div className="card flex beers screenl" key={beer._id}>
                    <Link className="flex link" to={`/beers/${beer._id}` }>
                <div className="cardimage flex"><img src={beer.image_url} alt={beer.name}/></div>
                <div className="content">
                    <strong>{beer.name}</strong>
                    <p>{beer.tagline}</p>
                    <small>{beer.contributed_by}</small>   
                </div>
                </Link>
                
                </div>
                <hr/>
                </div>
                
            )
          })}
         
    
        </div>
      );
}
  
};

export default Beers;