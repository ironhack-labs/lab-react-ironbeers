import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <div class="nav">
                <Link to="/">IRONBEERS REACTIFIED</Link>
            </div>
        )
    }
}
