import React from 'react'
import { NavLink } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
        }
    }

    render() {
        return (
            <div>
                <h1>Beer page!</h1>

                
                <NavLink exact to="/beers">Beers</NavLink>

                
                <br />
                <img src="/images/beers.png" alt="" />
                <br />

                
                <NavLink exact to="/random-beer">Random Beer</NavLink>

                
                <br />
                <img src="/images/random-beer.png" alt="" />
                <br />

                <NavLink exact to="/new-beer">New Beer</NavLink>


                <br />
                <img src="/images/new-beer.png" alt="" />
            </div>
        )
    }
}

export default Home
