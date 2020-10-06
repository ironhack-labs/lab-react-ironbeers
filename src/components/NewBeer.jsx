import React from 'react'
import Axios from 'axios'

class NewBeer extends React.Component {

    state = {
        newBeer: {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',

        }
    };

    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState({ ...this.state, [`${name}`]: value });
    }


    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
            Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
                .then(response => {
                    console.log(`${response.status}`);
                    this.setState({ ...this.state, redirect: "/beers" });
                })

    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <h1>New Beer</h1>
                <form className="new-beer" onSubmit={this.onSubmit}>
                    <input type="text" name="name" placeholder="name" onChange={this.handleOnChange} />
                    <input type="text" name="tagline" placeholder="tagline" onChange={this.handleOnChange} />
                    <input type="text" name="description" placeholder="description" onChange={this.handleOnChange} />
                    <input type="text" name="first_brewed" placeholder="first brewed" onChange={this.handleOnChange} />
                    <input type="text" name="brewers_tips" placeholder="brewers tips" onChange={this.handleOnChange} />
                    <input type="number" name="attenuation_level" placeholder="attenuation level" onChange={this.handleOnChange} />
                    <input type="text" name="contributed_by" placeholder="contributed by" onChange={this.handleOnChange} />
                    <input type="submit" value="Submit"></input>
                </form>

            </div>
        )
    }
}

export default NewBeer
