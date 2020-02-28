import React, { Component } from 'react'
import Nav from './Nav'

export default class NewBeer extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <form action="https://ih-beers-api2.herokuapp.com/beers/new" method="post">
                    <label>Name:</label>  
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        
                    />
                    <label>Tagline:</label>  
                    <input
                        type="text"
                        placeholder="Tagline"
                        id="tagline"
                        name="tagline"
                      
                    />
                    <label>Description:</label>  
                    <textarea
                        type="text"
                        placeholder="Description"
                        id="description"
                        name="description"
                        
                    />
                    <button type="submit"> Add Beer </button>
                </form>
            </div>
        )
    }
}