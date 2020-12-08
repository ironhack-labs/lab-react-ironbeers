import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom"


export default class ListBeers extends Component {
    state = {
        beers: []
    }
    componentDidMount = () => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((responseBack) => {
            console.log("responseBack:", responseBack.data);
            this.setState({ beers: responseBack.data });
        });
    };
    render() {
        return (
            <div>
                <h1>List of beers</h1>
                {this.state.beers.map((beer) => {
                    return (
                        <div key={beer._id}>
                            <Link to={`/${beer._id}`}>
                                <img style={{ width: "50px", heaight: "50px", alignContent: "screenLeft" }} src={beer.image_url} alt="" />
                            </Link>
                            <h2 style={{ textDecoration: 'none' }}> {beer.name} </h2>
                            <h3 style={{ textDecoration: 'none', color: 'grey' }}>{beer.tagline}</h3>
                            <p><b>Created by:</b> {beer.contributed_by}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

// import React from 'react'
// const ListBeers = (props) => {
//     console.log(props)
//     props.beers.map((beer) => {
//         return (
//             <div key={beer._id}>
//                 <Link to={`/${beer._id}`}>
//                     <img style={{ width: "50px", heaight: "50px", alignContent: "screenLeft" }} src={beer.image_url} alt="" />
//                 </Link>
//                 <h2 style={{ textDecoration: 'none' }}> {beer.name} </h2>
//                 <h3 style={{ textDecoration: 'none' }} style={{ color: 'grey' }} >{beer.tagline}</h3>
//                 <p><b>Created by:</b> {beer.contributed_by.slice(0, 10)}</p>
//             </div>
//         )
//     })

// }

// export default ListBeers


