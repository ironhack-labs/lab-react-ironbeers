import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import List from './List'
import TopBar from './TopBar'
class Listbeer extends Component {
    render() {
        return (
            <div>
                <div className="main-content">
                    <TopBar />
                </div>
                <div className="main-content">
                    <List />
                </div>
            </div >
        )
    }
}
export default Listbeer