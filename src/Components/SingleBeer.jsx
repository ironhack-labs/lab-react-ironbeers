import React from "react";
import axios from "axios";

class SingleBeer extends React.Component {

  state = {
    beer: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("HERE IS THE ID", id)

    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
          console.log(response)
        this.setState({ beer: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    if (this.state.beer === null) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        
        <img style={{height:"300px", paddingTop:"50px"}} src={this.state.beer.image_url} alt="" />
        <div style={{textAlign:"left", padding: "20px"}}>
        <h2 >
          {this.state.beer.name}
        </h2>
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default SingleBeer;