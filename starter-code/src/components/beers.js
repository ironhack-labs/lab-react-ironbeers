import React, { Component } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import axios from "axios";

class Beers extends Component {
    constructor(props){
        super(props);
        this.state = {
            beers: [],
            foundBeers: []
        }
    }

    componentDidMount(){
        axios.get("https://ih-beers-api.herokuapp.com/beers")
        .then(response => {
            this.setState({
                beers: response.data
            })
        })
    }

    changeHandler = (e) => {
        let searchQuery = e.target.value;

        var showBeers = (
            this.state.beers.filter(beer => (
                beer.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            ))
        )

        this.setState({
            foundBeers: showBeers
        })
    }

    render(){
        return(
            <>
            {this.state.foundBeers.length > 0 ? 
               <div>
                <Header />
                    <Link to="/new-beer" className="btn btn-primary mr-2">Add a New Beer</Link>
                   <input type="text" placeholder="Search Your Favorite Beer" onChange={this.changeHandler}/>
                   {this.state.foundBeers.map(beer=>(
                    <div className ="d-flex beer-container m-3">
                         <img src={beer.image_url} alt="beer-img" className="beer-img"></img>
                         <div className="d-flex flex-column justify-content-start align-items-start ml-3">
                             <h6>{beer.name}</h6>
                             <p className="text-secondary">{beer.tagline}</p>
                             <p>{beer.contributed_by}</p>
                             <Link to={`/beers/${beer._id}`}>See More</Link>
                         </div>
                    </div>
                   ))}
               </div> 
            : <div>
                <Header />
                <Link to="/new-beer" className="btn btn-primary mr-2">Add a New Beer</Link>
                <input type="text" placeholder="Search Your Favorite Beer" onChange={this.changeHandler}/>
                {this.state.beers.map(beer => (
                    <div className="d-flex beer-container m-3">
                        <img src={beer.image_url} alt="beer-img" className="beer-img"></img>
                        <div className="d-flex flex-column justify-content-start align-items-start ml-3">
                            <h6>{beer.name}</h6>
                            <p className="text-secondary">{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <Link to={`/beers/${beer._id}`}>See More</Link>
                        </div>
                    </div>
                ))}
            </div>
            }
            </>
        )
    }
}

export default Beers