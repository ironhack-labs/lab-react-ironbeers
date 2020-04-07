import React, { Component } from 'react'
import bulma from "bulma/css/bulma.css";
import {Link} from "react-router-dom"

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div >
                <Link to = "/all-beers">
                <div className="column is-two-fifths">
                    <img src="/images/beers.png" alt="Beers" />
                    <h1 className="has-text-centered">All Beers</h1>
                    <p className="has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, enim ducimus. Blanditiis
                    enim similique necessitatibus amet sed labore laboriosam tempora facil
                    is consequuntur quod dolorem incidunt, delectus velit ipsum at ipsa.</p>
                </div>
                </Link>
                <br />
                <Link to = "/random-beer">
                <div className="column is-two-fifths">
                    <img src="/images/new-beer.png" alt="Beers" />
                    <h1 className="has-text-centered">Random Beer</h1>
                    <p className="has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, enim ducimus. Blanditiis
                    enim similique necessitatibus amet sed labore laboriosam tempora facil
                  is consequuntur quod dolorem incidunt, delectus velit ipsum at ipsa.</p>
                </div>
                </Link>
                <br />
                <Link to = "new-beer">
                <div className="column is-two-fifths">
                    <img src="/images/random-beer.png" alt="Beers" />
                    <h1 className="has-text-centered">New Beer</h1>
                    <p className="has-text-centered">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, enim ducimus. Blanditiis
                    enim similique necessitatibus amet sed labore laboriosam tempora facil
                  is consequuntur quod dolorem incidunt, delectus velit ipsum at ipsa.</p>
                </div>
                </Link>
                <br />
            </div>
        )
    }
}

export default Home
