import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class Allbeers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    Axios.get(`http://localhost:5000/all`).then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <div style={{ width: "60%", float: "left" }}>
          {this.state.listOfBeers.map(beer => {
            return (
              <div key={beer._id}>
                <Link to={`/detail/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Allbeers;

// <div style={{width: '40%', float:"right"}}>
// <AddProject getData={() => this.getAllProjects()}/> {/* <== !!! */}
// </div>
