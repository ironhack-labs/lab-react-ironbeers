import React, { Component } from 'react'
import Form from '../../components/Form/Form'
import NavBar from '../../components/NavBar/NavBar'

export default class NewBeer extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Form />
            </div>
        )
    }
}
