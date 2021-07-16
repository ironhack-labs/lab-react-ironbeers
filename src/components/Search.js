import { Component } from "react"
import React from 'react';
import { Form } from 'react-bootstrap';

class Search extends Component {

    constructor() {
        super()
        this.state = {
            name: ""
        }
    }


    handleInputChange = e => {

        this.setState({
            name: e.target.value                   // computed property names
        })

        this.props.searchProduct(this.state.name)

    }


    render() {

        return (
            <>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group className="mb-3" name="search" controlId="formBasicEmail" >

                        <Form.Control type="text" name="search" placeholder="search..." onChange={this.handleInputChange} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>


                </Form>
            </>
        )
    }
}

export default Search