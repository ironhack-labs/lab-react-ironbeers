import React from "react";
import Axios from "axios";

import Nav from "../Nav/Nav";

import "./NewBeer.css";
export default class NewBeer extends React.Component {
  state = {
    value: {
      name: { name: "Name", type: "text", value: "" },
      tagline: { name: "Tagline", type: "text", value: "" },
      description: {
        name: "Description",
        type: "text",
        value: ""
      },
      firstBrewed: {
        name: "First Brewed",
        type: "text",
        value: ""
      },
      brewersTips: {
        name: "Brewers Tips",
        type: "text",
        value: ""
      },
      attenuationLevel: {
        name: "Attenuation Level",
        type: "number",
        value: ""
      },
      contributedBy: {
        name: "Contributed By",
        type: "text",
        value: ""
      }
    }
  };
  handleFormSubmit = e => {
    e.preventDefault();

    const { newEntry } = this.state.value;
    // if (
    //   newEntry.name.value !== "" &&
    //   newEntry.tagline.value !== "" &&
    //   newEntry.description.value !== "" &&
    //   newEntry.firstBrewed.value !== "" &&
    //   newEntry.brewersTips.value !== "" &&
    //   newEntry.attenuationLevel.value !== "" &&
    //   newEntry.contributedBy.value !== ""
    // ) {
    let entry = {
      name: "",
      tagline: "",
      description: "",
      firstBrewed: "",
      brewersTips: "",
      attenuationLevel: "",
      contributedBy: ""
    };

    for (let eachSection in this.state.value) {
      entry[eachSection] = this.state.value[eachSection].value;
      //   if (eachSection === "attenuationLevel") {
      //     entry[eachSection] = Number(this.state.value[eachSection].value);
      //   }
    }
    Axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, entry).then(
      res => {
        console.log(res);
        console.log(res.data);
      }
    );

    this.setState({
      value: {
        name: { name: "Name", type: "text", value: "" },
        tagline: { name: "Tagline", type: "text", value: "" },
        description: {
          name: "Description",
          type: "text",
          value: ""
        },
        firstBrewed: {
          name: "First Brewed",
          type: "text",
          value: ""
        },
        brewersTips: {
          name: "Brewers Tips",
          type: "text",
          value: ""
        },
        attenuationLevel: {
          name: "Attenuation Level",
          type: "number",
          value: ""
        },
        contributedBy: {
          name: "Contributed By",
          type: "text",
          value: ""
        }
      }
    });
  };

  handleChange = e => {
    let field = this.state.value[e.target.name];
    field.value = e.target.value;

    this.setState({
      value: {
        ...this.state.value,
        [e.target.name]: field
      }
    });
  };

  showForm = () => {
    let entries = this.state.value;

    let entryTitles = [];

    for (let eachSection in entries) {
      entryTitles.push(eachSection);
    }

    return entryTitles.map((eachEntry, i) => {
      return (
        <label key={i}>
          {entries[eachEntry].name}:
          <input
            name={eachEntry}
            type={this.state.value[eachEntry].type}
            value={this.state.value[eachEntry].value}
            onChange={this.handleChange}
          />
        </label>
      );
    });
  };
  render() {
    return (
      <div>
        <Nav />
        <form onSubmit={this.handleFormSubmit}>
          {this.showForm()}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
