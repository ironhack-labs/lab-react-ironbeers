import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class RandomBeer extends Component {
    render() {
        return (
            <div>
                <h3>
                    <Link to='/random'>Random Beer</Link>
                </h3>
            </div>
        )
    }
}

export default RandomBeer