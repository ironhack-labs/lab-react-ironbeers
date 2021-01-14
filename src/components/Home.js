import React, { Component } from 'react'

import { Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Link to = 'beers'>See All Beers</Link>
                <br />
                <Link to = 'random'>See Random Beer</Link>
                <Link to = 'new'>Add New Beer</Link>
            </div>
        )
    }
}
