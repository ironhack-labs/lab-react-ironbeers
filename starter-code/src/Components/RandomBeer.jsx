import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class RandomBeer extends Component {

    constructor() {
        super();
        this.state = {
            randomBeer: [], 
            ready: false
          }
    }
  
  
    componentDidMount(){
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then(res => { //This takes time 
        console.log(res)    
        this.setState({
              randomBeer:res.data, 
              ready: true
            }) 
        })
    }

    randomBeer = () => {
        if(this.state.ready){
            let beer = this.state.randomBeer

            return (
                // whatsupp
                <React.Fragment>
                    <img className="singleImg" src={beer.image_url} height="250" alt=""></img>
                    <div className="beerRow"> 
                        <h5>{beer.name}</h5> 
                        <h5 style={{ color: '#959595' }}>{beer.attenuation_level}</h5>
                    </div>
                    <div className="beerRow"> 
                        <h6 style={{ color: '#959595' }}><i>{beer.tagline}</i></h6>
                        <span><b>{beer.first_brewed}</b></span>
                    </div>
                    <p>{beer.description}</p>
                    <br></br>
                    <span className="beerRow" style={{ color: '#959595' }}>{beer.contributed_by}</span>
    
                </React.Fragment>
    
            )    
            
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <div>
                
                <nav className="navbar navbar-light">
                    <Link className="navbar-brand" to="/"><img src={"/images/logo.svg"} width="40" height="40" alt=""/></Link>
                </nav>

                {this.randomBeer()}

            </div>
        );
    }
}

export default RandomBeer;