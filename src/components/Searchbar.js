import React, { Component } from 'react'

export default class Searchbar extends Component {

    handleInputChange = event => {
        this.props.setQuery(event.target.value)
    }

    render() {
        return (
            <div>
                <input
                type="text"
                name="query"
                value={this.props.query}
                onChange={this.handleInputChange}
                />
            </div>
        )
    }
}
