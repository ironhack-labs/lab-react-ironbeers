import React, { Component } from 'react'

export default class newBeer extends Component {
    render() {
        return (
            <div className="grid">
            <div className="horizontale">
                <img src="https://source.unsplash.com/200x200/?beer" alt=""/>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eligendi sed adipisci aut iste at animi nulla, expedita aperiam amet similique, nemo officiis obcaecati blanditiis. Veritatis, distinctio dolorum! Eum, nulla!</p>
            </div>
            <div className="horizontale">
                <img src="https://source.unsplash.com/200x200/?alcohol" alt=""/>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eligendi sed adipisci aut iste at animi nulla, expedita aperiam amet similique, nemo officiis obcaecati blanditiis. Veritatis, distinctio dolorum! Eum, nulla!</p>
            </div>
            <div className="horizontale">
                <img src="https://source.unsplash.com/200x200/?drink,cold" alt=""/>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eligendi sed adipisci aut iste at animi nulla, expedita aperiam amet similique, nemo officiis obcaecati blanditiis. Veritatis, distinctio dolorum! Eum, nulla!</p>
            </div>
            </div>
        )
    }
}
