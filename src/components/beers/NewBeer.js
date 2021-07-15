import React, { Component } from "react"
import { Modal } from "react-bootstrap"
import { Redirect } from "react-router"
import Form from '../form/Form.js'

class NewBeer extends Component {
    constructor() {
        super()
        this.state = {
            modal: true
        }
    }
    render() {



        return (

            !this.state.modal ? <Redirect to="/" /> :
                (

                    <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })}>

                        <Modal.Header closeButton>
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form closeModal={() => this.setState({ modal: false })} />
                        </Modal.Body>

                    </Modal>

                )
        )
    }
}

export default NewBeer