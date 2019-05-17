import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const inputStyle = {
  border: "1px solid black",
  width: "90%",
  height: "50px",
  borderRadius: "10px"
};

class NewBeer extends React.Component {
  sendThisBeerToAPI(e) {
    e.preventDefault();
    // console.log(e.target.elements.name.value);
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", {
        name: e.target.elements.name.value,
        tagline: e.target.elements.tagline.value,
        description: e.target.elements.description.value,
        first_brewed: e.target.elements.first_brewed.value,
        brewers_tips: e.target.elements.brewers_tips.value,
        attenuation_level: e.target.elements.attenuation_level.value,
        contributed_by: e.target.elements.contributed_by.value
      })
      .then(sentData => {
        // console.log(sentData, "recieved");
      });
  }

  render() {
    return (
      <form onSubmit={this.sendThisBeerToAPI}>
        <label>Name</label>
        <br />
        <input style={inputStyle} name="name" type="text" />
        <br />
        <label>Tagline</label>
        <br />
        <input style={inputStyle} name="tagline" type="text" />
        <br />
        <label>Description</label>
        <br />
        <input style={inputStyle} name="description" type="text" />
        <br />
        <label>First Brewed</label>
        <br />
        <input style={inputStyle} name="first_brewed" type="text" />
        <br />
        <label>Brewers Tips</label>
        <br />
        <input style={inputStyle} name="brewers_tips" type="text" />
        <br />
        <label>Attentuation level</label>
        <br />
        <input style={inputStyle} name="attenuation_level" type="number" />
        <br />
        <label>Contributor</label>
        <br />
        <input style={inputStyle} name="contributed_by" type="text" />
        <br />
        <button
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "rgb(22, 183, 252)",
            margin: "10px"
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default NewBeer;
