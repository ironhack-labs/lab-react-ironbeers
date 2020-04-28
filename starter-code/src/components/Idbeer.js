import React, { Component } from 'react'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'
import TopBar from './TopBar'
class Idbeer extends Component {

    state = {
        foo: this.props.location.state
    }

    render() {

        const { foo } = this.state

        console.log(foo)
        return (

            <div className="main-content">
                <TopBar />

                <img alt="beer" className="imgid" src={foo.img} />

                <div className="beer-list-id">
                    <p className="line-items">
                        <span className="name-id">{foo.name}</span>
                        <span className="name-id">{foo.first}</span>


                    </p>
                    <p className="line-items">
                        <span className="tag-id">{foo.tag}  </span>
                        <span className=""> {foo.level}</span>

                    </p>
                    <span className="desc-id">{foo.description}</span>
                    <span className="tag-id">{foo.contributed_by}</span>

                </div>

            </div>
        )
    }
}


export default withRouter(Idbeer)