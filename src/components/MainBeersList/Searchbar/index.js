import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'

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

                <Form className="search-bar">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" name="name" onChange={this.handleInputChange} value={this.state.name} placeholder="Search a beer" />
                    </Form.Group>
                </Form>

        )
    }
}

export default SearchBar 