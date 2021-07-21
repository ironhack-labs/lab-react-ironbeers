import React, { Component } from 'react'
import {Link} from 'react-router-dom'


 class Links extends Component {


    render() {

        return (
            <div>
                <div>
                    <img src=''  alt=''/>
                  <Link to={`/beers`}> <h1>All Beers</h1> </Link> 
                </div>
                <div>
                    <img src='' alt=''/>
                    <Link to={`/random-beer`}> <h1>Random Beer</h1> </Link>
                </div>
                <div>
                    <img src='' alt=''/>
                    <h1>New Beer</h1>
                </div>
            </div>
        )
    }
}

export default Links
