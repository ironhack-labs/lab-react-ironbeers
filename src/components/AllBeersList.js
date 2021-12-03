import React, { Component } from 'react'
import AllBeersCard from './AllBeersCard'

export default class AllBeersList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.beers.map(elm => {

                    return (
                        <div key={elm._id} className="beer-list">
                            <AllBeersCard  {...elm} />
                        </div>
                    )
                })
                }
            </div>
        )
    }
}
