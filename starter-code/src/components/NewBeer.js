import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { createBeer } from '../services/ihBeers';

class createNewBeer extends Component {
    state={
        name:"",
        tagline:"",
        description:"",
        first_brewed:"",
        brewer_tips:"",
        attenuation_level:0,
        contributed_by:""
    }
    submit = async e => {
        e.preventDefault();
        await createBeer(
                        this.state.name, 
                        this.state.tagline,
                        this.state.first_brewed,
                        this.state.description,
                        this.state.brewer_tips,
                        this.state.attenuation_level,
                        this.state.contributed_by
                        );
        this.props.history.push('/');
      }
      handleInput = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
      }
    render() {
        return (
            
            <form className="Form" onSubmit={this.submit} id="newBeer">
                <label htmlFor="name">
                Name: 
                    <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInput}
                    required
                    />
                </label>
                <label htmlFor="tagline">
                Tagline: 
                    <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    value={this.state.tagline}
                    onChange={this.handleInput}
                    required
                    />
                </label>
                <label id="description" htmlFor="description">
                Description: 
                    <input
                    type="text"
                    name="description"
                    id="description"
                    value={this.state.description}
                    onChange={this.handleInput}
                    required
                    />
                </label>
                <label htmlFor="first_brewed">
                First brewed: 
                    <input
                    type="text"
                    name="first_brewed"
                    id="first_brewed"
                    value={this.state.first_brewed}
                    onChange={this.handleInput}
                    required
                    />
                </label>
                <label htmlFor="brewer_tips">
                Brewer tips: 
                    <input
                    type="text"
                    name="brewer_tips"
                    id="brewer_tips"
                    value={this.state.brewer_tips}
                    onChange={this.handleInput}
                    required
                    />
                </label>
                <label htmlFor="attenuation_level">
                Attenuation level: 
                    <input
                    type="number"
                    name="attenuation_level"
                    id="attenuation_level"
                    value={this.state.attenuation_level}
                    onChange={this.handleInput}
                    required
                    />
                </label>
                <label htmlFor="contributed_by">
                Contributed_by: 
                    <input
                    type="text"
                    name="contributed_by"
                    id="contributed_by"
                    value={this.state.contributed_by}
                    onChange={this.handleInput}
                    required
                    />
                </label>
​
                <input className="btnNew" id="create" type="submit" value="Create beer" />
            </form>
            
        )
    }
}
export default withRouter(createNewBeer);