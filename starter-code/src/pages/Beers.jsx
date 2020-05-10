import React, { Component } from 'react'
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Beers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
        };
    }

    componentDidMount() {
     
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((apiResponse) => {
            console.log(apiResponse);
            this.setState({ beers: apiResponse.data});
        })
        .catch((apiError) => {
            console.log(apiError);
        })
    }


    render() {
        return (
            <div>
            <Header/>

                <h1>All Beers</h1>

                <table>
                    <tbody>
                    {this.state.beers.map((beer, index) => (
                        <tr className="info-box" key={index}>
                            <td className="img-box"><img className="img-size" src={beer.image_url} alt="beer_img"/></td>
                            <td >
                            <p className="beername">{beer.name}</p>
                            <p className="tagline">{beer.tagline}</p>
                            <p className="contributor">{beer.contributed_by}   
                        
                            </p>
                            <p><Link to={`/beers/${beer._id}`}>Beer details</Link></p>
                            </td>
                  
                        </tr>
                    ))}

                    
                    </tbody>
                </table>
             
              

            </div>
        )
    }
}
export default Beers;