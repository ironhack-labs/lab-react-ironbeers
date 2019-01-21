import React from "react";
import { getData } from "../lib/getData.js";
import { BeerDetail } from "../components/BeerDetail.js";
import { Loader } from "../components/Loader.js";

export default class SingleBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    console.log("Component did mount");
    getData(`single/${this.props.match.params.id}`).then(data => {
      this.setState({ data });
    });
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    return (
      <div className="section sectionSingleBeer">
        <div className="container containerSingleBeer">
          {this.state.data ? (
            <BeerDetail beer={this.state.data}/>
          ) : (
           <Loader />
          )}
        </div>
      </div>
    );
  }
}
