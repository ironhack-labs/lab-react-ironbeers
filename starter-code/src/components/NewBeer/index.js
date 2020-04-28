import React from 'react';
import "./styles.css";
import Header from '../Header';
import Input from '../Input';
import axios from "axios";

class NewBeer extends React.Component {

    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
      }

    addBeer = () => {
        console.log(this.state)
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                this.setState({
                error: error,
                })
            })
    }

    handleInput = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    render(){
        const {name,tagline,description,first_brewed,brewer_tips,attenuation_level,contributed_by} = this.state;
        return (
            <div>
                <Header />
                <Input title='Name' style="form" name="name" type="text" value={name} action={this.handleInput}/>
                <Input title='Tagline' style="form" name="tagline" type="text" value={tagline} action={this.handleInput}/>
                <Input title='Description' style="form formDescription" name="description" type="text" value={description} action={this.handleInput}/>
                <Input title='First Brewed' style="form" name="first_brewed" type="text" value={first_brewed} action={this.handleInput}/>
                <Input title='Brewers Tips' style="form" name="brewer_tips" type="text" value={brewer_tips} action={this.handleInput}/>
                <Input title='Attenuation Level' style="form" name="attenuation_level" type="text" value={attenuation_level} action={this.handleInput}/>
                <Input title='Contributed By' style="form" name="contributed_by" type="text" value={contributed_by} action={this.handleInput}/>
                <button className="buttonNew" onClick={this.addBeer}> Add new </button>
            </div>
        )
    }
}

export default NewBeer;