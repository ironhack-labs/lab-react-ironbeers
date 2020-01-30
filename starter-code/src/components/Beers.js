import React, { Component } from "react";
import { Link } from "react-router-dom";
import home from '../images/Home.png';
import axios from 'axios';


export default class Beers extends Component {
    state={
        beers:[]
    }

    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
            console.log("data delivered from API");
        })
    }

  render() {
     const newArray = this.state.beers.map((oneBeer) => {
         return {
                id: oneBeer._id,
                name: oneBeer.name,
                image: oneBeer.image_url,
                tagline: oneBeer.tagline,
                contributed: oneBeer.contributed_by
        }
     });


    const newArrayJSX = newArray.map((b) => {
        return (
        <li key={b.id} className="oneBeer">
            <Link to={`/beers/${b.id}`}>
                <div className="imageContainer">
                    <img src={b.image} alt="Bierbild" className="oneBeerListImage"/>
               </div>
               <div className="beerDetails">
                    <h2> {b.name}</h2>
                    <h3>{b.tagline}</h3>
                    <h4>{b.contributed}</h4>
               </div>
            </Link>
        </li>
        )

    })

     console.log("Our NewArray: "+ newArray);
    return (
      <div>
        <h1>Beers</h1>
        <header>
          <Link to="/"><img src={home} alt="Banner" className="banner"/></Link>
        </header>
        <ul>
            {newArrayJSX}
        </ul>
      </div>
    );
  }
}
