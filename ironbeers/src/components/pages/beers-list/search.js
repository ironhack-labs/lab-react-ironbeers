import React, { Component } from 'react'

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: ''
        }

    }
    handleInputChange = e => {

        const { value } = e.target
        this.props.filter(value)
        this.setState({ search: value })
    }

    render() {

        return (
            <div style={{ padding: '20px 0 10px 0', textAlign: 'center' }}>
                <input style={{ width: '75%' }} name='name' value={this.state.search} onChange={this.handleInputChange} placeholder='Search' />
            </div>
        )
    }
}
export default Search