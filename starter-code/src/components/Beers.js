import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from './Navbar';


class Beers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = async () => {
   await axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(responseFromApi => {
       console.log(responseFromApi.data)
      this.setState({
        listOfBeers: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render(){
    return(
        <div>
        <Navbar/>
      <div className="row">
        <div className =" d-flex justify-content-around flex-wrap align-items-end p-5">
          { this.state.listOfBeers.map( beer => {
            return (
              <div  key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
            
                
                <div className="card cardBeer ">
                <div className="card-body d-flex justify-content-center flex-wrap align-items-end">
                <img className="beerImg" src={beer.image_url} alt="" srcset=""/>
                </div> 
                </div>
                <div className="card  mb-5 cardBeert">
                <div className="card-body d-flex justify-content-center flex-wrap align-items-end">
                
                <h3 className="text-center text-Beer">{beer.name}</h3>
                  </div>  
                    </div>
                        
                       
                </Link>
                
              </div>
            )})
          }
        </div>
      </div>
      </div>
    )
  }
}

export default Beers;