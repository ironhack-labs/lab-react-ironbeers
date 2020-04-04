import React from 'react';
import Homeblock from "./Homeblock";
import {Link} from "react-router-dom";

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="links">

                <Link to="/beers">   
                    <Homeblock image="/images/beers.png" title="All beers" text="charles"/>
                </Link>

                <Link to="/random-beer">
                    <Homeblock image="/images/new-beer.png" title="Random beer" text="charles"/>
                </Link>

                <Link to="/new-beer">
                    <Homeblock image="/images/random-beer.png" title="New beer" text="charles"/>
                </Link>
            </div>
        )
    }
}

export default Home