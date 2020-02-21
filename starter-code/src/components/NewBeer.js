import React, { Component } from "react";
import axios from "axios";

class NewBeer extends Component {
  createNewBeer(bla) {
    bla.preventDefault();
    // console.log(bla.target.innerHTML);
    let name = document.getElementsByName("name")[0].value;
    let tagline = document.getElementsByName("tagline")[0].value;
    let description = document.getElementsByName("description")[0].value;
    let firstBrewed = document.getElementsByName("firstBrewed")[0].value;
    let tips = document.getElementsByName("tips")[0].value;
    let attenuation = document.getElementsByName("attenuation")[0].value;
    let contributedBy = document.getElementsByName("contributedBy")[0].value;
    console.log(name, tagline);
    // axios
    //   .get(`https://ih-beers-api2.herokuapp.com/beers/new`)
    //   .then(response => {
    //     console.log(response.data);
    //     //{ message: "New beer successfully saved to database!"}
    //     // this.setState({
    //     //   beer: response.data
    //     // });
    //   });
  }
  render() {
    return (
      <div className="container">
        <form action="/" method="POST" onSubmit={this.createNewBeer}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="form-control" />

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" className="form-control" />

          <label htmlFor="description">Example textarea</label>
          <textarea
            className="form-control"
            name="description"
            rows="4"
          ></textarea>

          <label htmlFor="firstBrewed">First Brewed</label>
          <input type="text" name="firstBrewed" className="form-control" />

          <label htmlFor="tips">Brewer's tips</label>
          <input type="text" name="tips" className="form-control" />

          <label htmlFor="attenuation">Attenuation Level</label>
          <input type="number" name="attenuation" className="form-control" />

          <label htmlFor="contributedBy">Contributed by</label>
          <input type="text" name="contributedBy" className="form-control" />

          <button type="submit" className="btn btn-primary submit-btn">
            New Beer
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
