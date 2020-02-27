import React, { Component } from 'react'
import Nav from './Nav'

export default class NewBeer extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <form action="">
                    <label>Name:</label>  
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value=""
                    />
                    <label>Tagline:</label>  
                    <input
                        type="text"
                        placeholder="Tagline"
                        id="tagline"
                        name="tagline"
                        value=""
                    />
                    <label>Description:</label>  
                    <textarea
                        type="text"
                        placeholder="Description"
                        id="description"
                        name="description"
                        value=""
                    />
                    <button type="submit"> Add Beer </button>
                </form>
            </div>
        )
    }
}