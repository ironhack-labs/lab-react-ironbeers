import React, { Component } from "react"
import Service from "../service/Beer.service"
import { Link } from "react-router-dom"

class Beers extends Component {
    constructor() {
        super();
        this._service = new Service();
        this.state = {
            beers: []
        };
    }
    componentDidMount = () => this.updateBeersList();
    
    updateBeersList = () => {
        this._service.getAllBeers()
        .then(allBeersFromDB => this.setState({ beers: allBeersFromDB.data }))
        .catch(err => console.log("Error", err));
    }
    render() {
        return (
            <div className="App">
                {/* <div>
                    <Link to="/">Home</Link>
                </div> */}
                <h1>Beers</h1>
                {this.state.beers.map((elem, idx) => (
                    <div key={idx}>
                        <img src={elem.image_url} alt={elem.name} />
                        <h3>{elem.name}</h3>
                        <h5>{elem.tagline}</h5>
                        <p>
                            Created by: <small>{elem.contributed_by}</small>
                        </p>
                        <Link to={`/Beers/${elem._id}`}>View More</Link>
                    </div>
                ))}
            </div>
        );
    }
}
export default Beers;                  