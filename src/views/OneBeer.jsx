import React from "react";
import axios from "axios";


class OneBeer extends React.Component {
    state = {
      beer: [],
    };
  
    componentDidMount() {
        
        const beerId = this.props.match.params.id;
        axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId).then((apiResponse) => {
            console.log(apiResponse);
              this.setState({
                beer: apiResponse.data,
              });
        });
    }
  
    render() {
      if (!this.state.beer) {
        return <div>Looking for your beer..</div>;
      }
  
      return (
        <div>
          <h2>Welcome to the beer page</h2>
          <div>
            
            <img src={this.state.beer.image_url} />
            <h2>{this.state.beer.name}</h2>
            <h3>{this.state.beer.tagline}</h3>
            <h4>{this.state.beer.first_brewed}</h4>
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
      
        </div>
      );
    }
  }
  
  export default OneBeer;
  