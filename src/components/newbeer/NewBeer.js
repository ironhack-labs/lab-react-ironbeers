import React, { Component } from 'react';
import './NewBeer.css';
import Header from '../header/Header';
import axios from 'axios';

export default class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: Number(),
        description: '',
        contributed_by: '',
    }

    onChangeHandler = event => {
        // console.log(event.target.value);

        let { name, value } = event.target;
        
        // console.log(name, value);

        this.setState({
            [name]: value
        }, () => console.log("state in onChangeHandler: ", this.state))
    }

    // onSubmitHandler = event => {
    //     //  this line is mandatory: it prevents the default HTML submit button behavior
    //     event.preventDefault();
        
    //     console.log("state in onSubmitHandler", this.state);

        

    //     // console.log(this.props.addProductToProductList);

        

    //     this.setState({
    //             name: '',
    //             tagline: '',
    //             first_brewed: '',
    //             brewers_tips: '',
    //             attenuation_level: Number(),
    //             description: '',
    //             contributed_by: '',
    //     })
    // }


    render() {
        return (
            <div>
                <Header />
                <h1>New Beer</h1>

                <form 
                // onSubmit={this.onSubmitHandler} 
                className="new-beer-form"
                action="https://ih-beers-api2.herokuapp.com/beers/new"
                method="POST"
                >
                    <label> Name: 
                        <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.onChangeHandler} 
                        />
                    </label>
                    <br/>
                    <label> Tagline: 
                        <input
                        name="tagline"
                        type="text"
                        value={this.state.tagline}
                        onChange={this.onChangeHandler} 
                        />
                    </label>
                    <br/>
                    <label> Description: 
                        <input
                        name="description"
                        type="text"
                        value={this.state.description} 
                        onChange={this.onChangeHandler}
                        />
                    </label>
                    <br/>
                    <label> First Brewed: 
                        <input
                        name="first_brewed"
                        type="text"
                        value={this.state.first_brewed} 
                        onChange={this.onChangeHandler}
                        />
                    </label>
                    <br/>
                    <label> Brewers Tips: 
                        <input
                        name="brewers_tips"
                        type="text"
                        value={this.state.brewers_tips} 
                        onChange={this.onChangeHandler}
                        />
                    </label>
                    <br/>
                    <label> Attenuation Level: 
                        <input
                        name="attenuation_level"
                        type="number"
                        value={this.state.attenuation_level} 
                        onChange={this.onChangeHandler}
                        />
                    </label>
                    <br/>
                    <label> Contributed By: 
                        <input
                        name="contributed_by"
                        type="text"
                        value={this.state.contributed_by} 
                        onChange={this.onChangeHandler}
                        />
                    </label>
                    <br/> <br/>
                    <button>
                        Save New Beer
                    </button>
                </form>
            </div>
        )
    }
}
