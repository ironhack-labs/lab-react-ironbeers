import React, { Component } from 'react';
import Axios from 'axios';

class NewBeer extends Component {

    saveBeer = (e) => {
        e.preventDefault()
        console.log(e.target.elements)
        let {name, tagline} = { ...e.target.elements }
        console.log(name)
        Axios.post('https://ih-beer-api.herokuapp.com/beers/new', { name: e.target.elements.name.value, tagline: e.target.elements.tagline.value })
           .then(responseFromTHeServer=>{
               console.log(responseFromTHeServer)
        }).catch(err=>console.error(err))
    }


    render() {
        return (
            <div>
                add a new beer
                <form onSubmit={this.saveBeer}>
                    <input type="text" name="name"></input>
                    <input type="text" name="tagline"></input>
                    <button type="submit">Save Beer</button>
                </form>
            </div>
        );
    }
}

export default NewBeer;