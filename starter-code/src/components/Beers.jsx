import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Beers extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
                <h1 className = "bord" id = "small"><Link to={`/beer-details/${this.props.id}`}>
                        <div className="columns ">
                            <img className = "column is-narrow" id ="smaller" src={this.props.image} alt="" />
                            <div className = "column is-narrow">
                                <div>
                                    {this.props.name}
                                </div>
                                <div>
                                    {this.props.description}
                                </div>
                                <div>
                                    {this.props.attenuation_level}
                                </div>
                                <div>
                                    {this.props.first_brewed}
                                </div>
                                <div>
                                    {this.props.tagline}
                                </div>
                            </div>
                        </div>
                    </Link>
                </h1>
        )
    }
}

export default Beers
