import React, { Component } from 'react';
import Header from '../components/header/Header'
import axios from 'axios';


class NewBeer extends Component {

    state = {
        name:''
    }

    handleFormSubmit = (event) =>{
        event.preventDefault();
        const newBeer = {
            name: this.state.name
        }

        axios.post('https://ih-beer-api.herokuapp.com/beers/new', newBeer)
        .then(()=>{
            console.log("success")
            this.props.history.push('/')
        })
        .catch((err)=> {
            console.log(err)
        })
    }

    handleChange = (event) => {  
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return (
            <div>
                <Header/>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default NewBeer;