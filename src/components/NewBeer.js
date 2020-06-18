import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewer_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    }

    changeHandler = (event) => {
        let inputValue = event.target.value;
        let inputName = event.target.name;

        let obj = {};
        obj[inputName] = inputValue;

        this.setState(obj);
    };

    formSubmitionHandler = (event) => {
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(() => {
                // console.log('added new beer');
                this.setState({
                    name: '',
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewer_tips: '',
                    attenuation_level: 0,
                    contributed_by: ''
                });
            });
    };

    render() {
        return (
            <div className="container-md">
                <div className="w-100 h-20 d-flex justify-content-center align-items-center" style={{backgroundColor: "blue", height: "5%"}}>
                    <Link to={'/'} className="w-100" style={{color: "white", height: "100%", width: "100%"}}>
                        <i class="fas fa-home"></i>
                    </Link>
                </div>
                <form onSubmit={this.formSubmitionHandler}>
                    <label htmlFor="name">Name:</label>
                    <br/>
                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                    <br/>
                    <label htmlFor="tagLine">Tag Line:</label>
                    <br/>
                    <input type="text" name="tagLine" value={this.state.tagline} onChange={this.changeHandler}/>
                    <br/>
                    <label htmlFor="description">Description:</label>
                    <br/>
                    <input type="text" name="description" value={this.state.description} onChange={this.changeHandler}/>
                    <br/>
                    <label htmlFor="first_brewed">First Brewed:</label>
                    <br/>
                    <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.changeHandler}/>
                    <br/>
                    <label htmlFor="brewer_tips">Brewer tips:</label>
                    <br/>
                    <input type="text" name="brewer_tips" value={this.state.brewer_tips} onChange={this.changeHandler}/>
                    <br/>
                    <label htmlFor="attenuation_level">Attenuation level:</label>
                    <br/>
                    <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.changeHandler}/>
                    <br/>
                    <label htmlFor="contributed_by">Contributed by:</label>
                    <br/>
                    <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.changeHandler}/>
                    <br/>
                    <button type="submit">Add New</button>
                </form>
            </div>
        );
    } 
}