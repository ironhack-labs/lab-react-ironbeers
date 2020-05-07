import React, { Component } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"



    class Beers extends Component {

        constructor() {
            super()

            this.state = {
                beers: []
            }
        }

        componentDidMount() {
            axios
                .get('https://ih-beers-api2.herokuapp.com/beers')
                .then(response => {
                    this.setState({beers:response.data})
                })
                .catch(err => console.log(err))
        }

        render() {
            return (

                <ul>

                {this.state.beers.map((elm, idx) => (

                    <li key={elm._id}> <Link to={`/beers/${elm._id}`}>{elm.name} </Link></li>
                    
    
                    )
                  )            
                }
                </ul>
            )
        }
    }

export default Beers