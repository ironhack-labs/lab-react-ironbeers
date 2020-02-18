import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class AllBeers extends Component {

    state = {
        beers: [], 
      }
    
    componentDidMount(){
    
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => { //This takes time 
            this.setState({
              beers:res.data 
            }) 
        })
    }
   
    showBeers = () => {
        let allBeers = [...this.state.beers]
        return allBeers.map(eachBeer => {
            return (
            <React.Fragment>
                <div className="beerDiv">
                    <div className="beerImg">
                        <img src= {eachBeer.image_url} height="250" alt=""/>
                    </div>
                    <div className="beerStuff">
                        <h4>{eachBeer.name}</h4>
                        <h6><i>{eachBeer.tagline}</i></h6>
                        <p><b>Created by: </b>{eachBeer.contributed_by.slice(0,10)}</p>
                    </div>
                </div>
            </React.Fragment>
            )

        })
    }

    render() {
        console.log(this.state.beers)
        return (
            <div>

                
                <nav className="navbar navbar-light">
                    <Link className="navbar-brand" to="/"><img src={"/images/logo.svg"} width="40" height="40" alt=""/></Link>
                </nav>
                <div>
                    {this.showBeers()}
                </div>

            </div>
        );
    }
}

export default AllBeers;



