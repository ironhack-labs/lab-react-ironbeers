import React, { Component } from 'react';
import Header from './Header';
import {
    BrowserRouter,
    Switch,
    Route,
    withRouter,
    Link
} from 'react-router-dom';
class NewBeer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            descrption: '',
            first_brewed: '',
            attenuation_level: '',
            contributed_by: ''
        };
    }
    myChangeHandler = event =>
        this.setState({
            name: event.target.value1,
            tagline: event.target.value2,
            descrption: event.target.value3,
            first_brewed: event.target.value4,
            attenuation_level: event.target.value5,
            contributed_by: event.target.value6
        });
    addBeerToList(event) {
        event.preventDefault();
        const beerName = this.state.name;
        console.log('Here are values' + beerName);
        const beers = [...this.state.beers, beerName];
        this.setState({
            beers: [],
            name: '',
            tagline: '',
            name: '',
            name: ''
        });
    }
    render() {
        return (
            <div>
                <Header></Header>
                <form onSubmit={this.addBeerToList}>
                    <h1>Hello</h1>
                    <p>Enter your name:</p>
                    <input
                        type="text"
                        name="name"
                        value1={this.state.name}
                        onChange={this.myChangeHandler}
                    />
                    <p>Enter your tagline:</p>
                    <input
                        type="text"
                        name="tagline"
                        value2={this.state.tagline}
                        onChange={this.myChangeHandler}
                    />
                    <p>Enter your description:</p>
                    <input
                        type="text"
                        name="description"
                        value3={this.state.description}
                        onChange={this.myChangeHandler}
                    />
                    <p>First Brewed:</p>
                    <input
                        type="text"
                        name="first_brewed"
                        value4={this.state.first_brewed}
                        onChange={this.myChangeHandler}
                    />
                    <p>Attenuation Level:</p>
                    <input
                        type="number"
                        name="attenuation_level"
                        value5={this.state.attenuation_level}
                        onChange={this.myChangeHandler}
                    />
                    <p>Contributed by:</p>
                    <input
                        type="text"
                        name="contributed_by"
                        value6={this.state.contributed_by}
                        onChange={this.myChangeHandler}
                    />
                    <input type="submit" value="submit" className="btn" />
                </form>
            </div>
        );
    }
}
export default NewBeer;