import React from 'react'
import './NewBeer.css'
import axios from 'axios'

import NavBar from '../NavBar'

class NewBeer extends React.Component{
    
    state = {
    }

    submitNewBeer(event){
        event.preventDefault()
        const newBeer = this.state
        axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    updateInput(event){
        const {name, value} = event.target
        if (event.target.type === 'number'){
            this.setState({[name]: Number(value)})
        } else {
            this.setState({[name]: value})
        }
    }

    getNewForm(){
        return (
            <div className="new-beer-body">
                <h1>New Beer</h1>
                <form onSubmit={(event)=>this.submitNewBeer(event)} className="new-beer-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" onChange={(event)=>this.updateInput(event)} name="name"/>
                    <label htmlFor="tagline">Tagline</label>
                    <input type="text" onChange={(event)=>this.updateInput(event)} name="tagline"/>
                    <label htmlFor="description">Description</label>
                    <input type="text" onChange={(event)=>this.updateInput(event)} name="description"/>
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input type="text" onChange={(event)=>this.updateInput(event)} name="first_brewed"/>
                    <label htmlFor="brewers_tips">Brewers Tips</label>
                    <input type="text" onChange={(event)=>this.updateInput(event)} name="brewers_tips"/>
                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <input type="number" name="attenuation_level"/>
                    <label htmlFor="contributed_by">Contributed By</label>
                    <input type="text" onChange={(event)=>this.updateInput(event)} name="contributed_by"/>
                    <button>Create New Beer</button>
                </form>
            </div>
        )
    }
    
    render() {
        return(
            <div className="NewBeer">
                <NavBar />
                {this.getNewForm()}
            </div>
        )
    }
}

export default NewBeer
