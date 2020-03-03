import React, { Component } from 'react'
import { FaBeer } from 'react-icons/fa';


export default class Nav extends Component {
    render() {
        return (
            <div>
                <button className="NavB"><FaBeer /></button>
            </div>
        )
    }
}
