import React, { Component } from "react";
import axios from "axios";
import Header  from "./Header";

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.getOneBeer();
  }

  getOneBeer() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:5000/single/${id}`).then(({ data }) => {
      this.setState({
        ...this.state,
        beer: data
      });
    });
  }

  render() {
    const { beer } = this.state;
    return (
      <div className="row">
        <Header />
        
        {beer && (
          <>
            <div>
            <img className="beer-img" src={beer.image_url} alt={beer.name} />
            <div className="beer-info">
              <h3>{beer.name}</h3>
              <span>{beer.tagline}</span>
              <small>Created by: {beer.contributed_by}</small>
            </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Beer;
