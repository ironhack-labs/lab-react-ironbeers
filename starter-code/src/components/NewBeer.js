import React, { Component } from 'react';
import Header from "./Header";


class NewBeer extends Component {
    render() {
        return (            
            <div>
                <Header/>                
                <p>
                <img src ="./images/new-beer.png" alt = "beer"/>
                <h1>New Beer</h1>
                </p>
            </div>
        )
    }
}


export default NewBeer;