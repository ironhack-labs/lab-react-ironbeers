import React from "react";
import { getData } from "../lib/getData.js";
import { ListBeersCard } from "./ListBeersCard.js";
import { Loader } from "../components/Loader";

export default class ListBeers extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  componentDidMount() {
    console.log("Component did mount");
    getData("all").then(data => {
      this.setState({ data });
    });
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.data ? (
              this.state.data.map(beer => (
                <ListBeersCard key={beer._id} beer={beer} />
              ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    );
  }
}
