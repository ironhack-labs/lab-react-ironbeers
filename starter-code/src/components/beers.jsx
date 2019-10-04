import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class beers extends Component {
    render() {
        return (
            <div className="beers">
                <Link to={this.props.link}>
                    <img src={this.props.img} alt=""/>
                    <div>
                        <h2>{this.props.name}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursus lorem libero, quis porttitor felis ultricies non. Maecenas eu elementum magna. Nullam quis dolor commodo, hendrerit sem sit amet, convallis nunc. Etiam sit amet nibh euismod, semper elit vel, imperdiet.</p>
                    </div>
                </Link>
            </div>
        )
    }
}
