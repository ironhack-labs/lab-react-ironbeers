import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class AllBeers extends Component {
    state = {
        beers: []
    }

    componentDidMount() {

        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then((res) => {
                this.setState({
                    beers: res.data
                })
            })
    }

    render() {
        let myStyle = {
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            width: "40%",
            maxHeight: "95vh",
            overflow: "scroll"
        }

        return (
            <div>
                <ul class="list-group" style={myStyle}>
                    {
                        this.state.beers.map((beer, i) => {
                            return (

                                // <li class="list-group-item">{country.flag}{country.name.common}</li>
                                <Link class="list-group-item list-group-item-action"><img  height="100px"v src={beer.image_url}></img><br></br>{beer.name}<br></br>{beer.tagline}<br></br>{beer.contributed_by} </Link>

                            )
                        })
                    }
                </ul>
                </div>
        )
    }
}
