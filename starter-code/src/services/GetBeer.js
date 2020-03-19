import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

//CONSULTA AXIOS EN COMPONENTE FUNCIONAL

// const AllBeer = () => {
//   const [beer, setBeer] = useState({beer:[esto esta asi para que funcionase con lo que he puesto en las clases]})

//   useEffect(() => {
//       fetch("https://ih-beers-api2.herokuapp.com/beers")
//         .then(response => response.json())
//         .then(beersArray => setBeer({ beer: beersArray }));
//   },[])
//   return (blabla)
// }

class AllBeer extends Component {
  constructor() {
    super();
    this.state = { beer: undefined };
  }

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => response.json())
      .then(beersArray => this.setState({ beer: beersArray }));
  }
  render() {
    return (
      <div>
        {this.state.beer ? (
          <div>
            {this.state.beer.map(beer => (
              <div className="prueba">
                <Link className="link" to={`/beer/${beer._id}`} key={beer._id}>
                  <img src={beer.image_url} alt={beer.name}></img>
                  <h3>{`Name: ${beer.name}`}</h3>
                  <p>{`Tagline: ${beer.tagline}`}</p>
                  <p>{`Contributed By: ${beer.contributed_by}`}</p>
                  <hr></hr>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
}

export default AllBeer;
