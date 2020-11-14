import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import './Beers.css';

class Beers extends Component {
  state = {
    listOfBeers: [],
  };

  getAllBeers = () => {
    axios.get(`https://api.punkapi.com/v2/beers`).then((responseFromApi) => {
      this.setState({
        listOfBeers: responseFromApi.data,
      });
      console.log(this.state.listOfBeers);
    });
  };

  //utilizamos un lifecycle method para asegurarnos que el pedido de todos los projects se realice tan pronto como se monte el componente.
  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div className="beersPage">
        <Navbar />
        {/* Hacemos un map para recorrer todo el array*/}
        {this.state.listOfBeers.map((eachBeer, index) => {
          return (
            <div key={eachBeer.id}>
              <div>
                <img src={eachBeer.image_url} alt="eachBeer" />
              </div>
              <div>
                <h4>{eachBeer.name}</h4>
                <p>{eachBeer.tagline}</p>
                <p>Contributed by: {eachBeer.contributed_by}</p>
                <hr/>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
