import React from "react";


class Beer extends React.Component {

  render() {

    fetch("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });

    return (
      <div>
        <h1>Beer Component</h1>
      </div>
    );
  }
}

export default Beer;

/* 
image_url: "https://images.punkapi.com/v2/keg.png",
_id: "5daf440ccbc5d2fd7d19ebdd",
name: "Berliner Weisse With Yuzu - B-Sides",
tagline: "Japanese Citrus Berliner Weisse.",
first_brewed: "11/2015",

<img src={this.props.pictureUrl} width="70"/>
</td>
<td width="50">{this.props.name}</td>
<td>{this.props.popularity.toFixed(2)}</td>
<td>{this.props.id}</td>
<td>
  <button className="tlacidlo" onClick={() => this.props.clickToDelete()}>Delete</button>
</td> */