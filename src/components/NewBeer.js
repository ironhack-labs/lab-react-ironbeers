import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class NewBeer extends Component {
    render() {
        return (
            <div>
                <h3>
                    <Link to='/new'>New Beer</Link>
                </h3>
            </div>
        )
    }
}

export default NewBeer