import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import styled from 'styled-components'

const Div = styled.div`
    max-width: 600px;
    margin: auto;
`

class NewBeer extends Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    }

    onChangeHandler = (event) => {
        const {name, value} = event.target;

        this.setState({ [name]: value });
    };

    formSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(() => {
                this.props.history.push('/')
            });
    };

    render(){
        return(
            <div>
                <Header />
                <Div>
                    <form onSubmit={this.formSubmitHandler}>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" value={this.state.name} onChange={this.onChangeHandler} />
                        </div>
                        <div class="form-group">
                            <label>Tagline</label>
                            <input type="text" name="tagline" class="form-control" value={this.state.tagline} onChange={this.onChangeHandler} />
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea type="text" name="description" class="form-control" value={this.state.description} onChange={this.onChangeHandler} />
                        </div>
                        <div class="form-group">
                            <label>First Brewed</label>
                            <input type="text" name="first_brewed" class="form-control" value={this.state.first_brewed} onChange={this.onChangeHandler} />
                        </div>
                        <div class="form-group">
                            <label>Brewers Tips</label>
                            <input type="text" name="brewers_tips" class="form-control" value={this.state.brewers_tips} onChange={this.onChangeHandler} />
                        </div>
                        <div class="form-group">
                            <label>Attenuation Level</label>
                            <input type="number" name="attenuation_level" class="form-control" value={this.state.attenuation_level} onChange={this.onChangeHandler} />
                        </div>
                        <div class="form-group">
                            <label>Contributed By</label>
                            <input type="text" name="contributed_by" class="form-control" value={this.state.contributed_by} onChange={this.onChangeHandler} />
                        </div>

                        <input type="submit" class="btn btn-info" value="ADD NEW" />
                    </form>
                </Div>
            </div>
        )
    }
}

export default NewBeer;