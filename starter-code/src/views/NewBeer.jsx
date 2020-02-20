import React, { Component } from 'react';
import apiHandler from "./../api/Handler";

const api = new apiHandler();

export default class NewBeer extends Component {
    state = {
        name: ""

    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state);
        

    }

    render() {
        return (
            <div>
                <form>
                    <p>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={this.state.name}
                            onChange={e => {
                                console.log(e.target.value);
                                this.setState({ name: e.target.value })
                            }}
                        />
                    </p>

                    <p>     
                        <label htmlFor="tagline">Tagline</label>
                        <input 
                        type="text" 
                        id="tagline"
                        value={this.state.tagline}
                        onChange={e => {
                            console.log(e.target.value);
                            this.setState({ tagline: e.target.value })
                        }}
                        />
                    </p>

                    <p>
                        <label htmlFor="description">Description</label>
                        <input 
                        type="text" 
                        id="description"
                        value={this.state.description}
                        onChange={e => {
                            console.log(e.target.value);
                            this.setState({ description: e.target.value })
                        }} 
                        />
                    </p>

                    <p>
                        <label htmlFor="first_brewed">First brewed</label>
                        <input 
                        type="text" 
                        id="first_brewed"
                        value={this.state.first_brewed}
                        onChange={e => {
                            console.log(e.target.value);
                            this.setState({ first_brewed: e.target.value })
                        }}  
                        />
                    </p>

                    <p>
                        <label htmlFor="brewers_tips">Brewers tips</label>
                        <input 
                        type="text" 
                        id="brewers_tips"
                        value={this.state.brewers_tips}
                        onChange={e => {
                            console.log(e.target.value);
                            this.setState({ brewers_tips: e.target.value })
                        }} 
                        />
                    </p>

                    <p>
                        <label htmlFor="attenuation_level">Attenuation level</label>
                        <input 
                        type="number" 
                        id="attenuation_level" 
                        value={this.state.attenuation_level}
                        onChange={e => {
                            console.log(e.target.value);
                            this.setState({ attenuation_level: e.target.value })
                        }} 
                        />
                    </p>

                    <p>
                        <label htmlFor="contributed_by">Contributed by</label>
                        <input 
                        type="text" 
                        id="contributed_by" 
                        value={this.state.contributed_by}
                        onChange={e => {
                            console.log(e.target.value);
                            this.setState({ contributed_by: e.target.value })
                        }} 
                        />
                    </p>

                    <button onClick={this.onSubmit}>Submit</button>

                </form>
            </div>
        )
    }
}
