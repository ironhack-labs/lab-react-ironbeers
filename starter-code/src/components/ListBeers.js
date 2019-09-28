import React from "react";
import NavHome from "./NavHome";
import { Link } from "react-router-dom";
//========= Axios
import axios from "axios";

class ListBeers extends React.Component {
  state = {
    beers: []
  };

  //========== Important because async!!!! to render the data and automaticly update
  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(data => {
      this.setState({
        beers: data
      });
    });
  }

  render() {
    let beersDetails;
    //Get the data after Update
    if (this.state.beers.data) {
      beersDetails = this.state.beers.data.map(el => {
        // if (el.contributed_by.includes("<") && el.contributed_by) {
        //   el.contributed_by = el.contributed_by.split("<")[0];
        // }
        //console.log(el._id);

        let linkUrl = "/single-beer/" + el._id;
        return (
          <div className="alt-beer">
            <img src={el.image_url} alt="" />
            <div className="alt-beer-content">
              <Link to={linkUrl}>
                <h4>{el.name}</h4>
              </Link>
              <p>{el.tagline}</p>
              <p>
                <strong>{el.contributed_by}</strong>
              </p>
            </div>
          </div>
        );
      });
    }

    return (
      <div>
        <NavHome />
        <div className="beer-container">{beersDetails}</div>
      </div>
    );
  }
}

export default ListBeers;
