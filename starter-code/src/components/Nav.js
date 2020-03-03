import React, { Component } from 'react'
import { FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    render() {
        return (
            <div>
                <button className="NavB"><Link to="/"><FaBeer /></Link></button>
            </div>
        )
    }
}
