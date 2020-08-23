import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class HomePage extends Component {



    render() {
        return (
            <div>

                <Link to="/beers"><p>All Beers</p></Link>
                <Link to="/random-beer"><p>Random Beer</p></Link>
                <Link to="/new-beer"><p>New Beer</p></Link>                
                
                                
            </div>
        )
    }
}
