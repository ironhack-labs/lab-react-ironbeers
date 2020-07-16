import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
        }
    }

    handleInputChange = e => {
        this.setState({ name: e.target.value })
        this.props.filterProducts(e.target.value)
    }


    render() {
        return (
            <form>
                <label>Search <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} /></label>
            </form>
        )
    }
}

export default SearchBar 