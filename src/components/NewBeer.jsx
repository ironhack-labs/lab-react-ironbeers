import React from 'react';
import { createNewBeer } from '../services/allServices';
import './NewBeer.css';

export default class NewBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 1,
        contributed_by: ''
    };

    createBeer(event) {
        event.preventDefault();
        createNewBeer(this.state)
            .then(() => this.props.history.push('/'));          
    }


    changeState(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <div className="formAdd">
                <form method="POST" onSubmit={(event) => this.createBeer(event)}>
                    <div className="form-group">
                        <label htmlFor="name">Beer Name</label>
                        <input type="text" className="form-control" name="name" value={this.state.name} onChange={(event) => this.changeState(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tagline">Beer Tagline</label>
                        <input type="text" className="form-control" name="tagline" value={this.state.tagline} onChange={(event) => this.changeState(event)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Beer Description</label>
                        <textarea type="text" className="form-control" name="description" value={this.state.description} onChange={(event) => this.changeState(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="first_brewed">Beer First Brewed</label>
                        <input type="text" className="form-control" name="first_brewed" value={this.state.first_brewed} onChange={(event) => this.changeState(event)}  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="brewers_tips">Beer Brewers Tips</label>
                        <input type="text" className="form-control" name="brewers_tips" value={this.state.brewers_tips} onChange={(event) => this.changeState(event)}  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="attenuation_level">Beer Attenuation Level</label>
                        <input type="number" min={1} className="form-control" name="attenuation_level" value={this.state.attenuation_level} onChange={(event) => this.changeState(event)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="contributed_by">Beer Contributed By</label>
                        <input type="text" className="form-control" name="contributed_by" value={this.state.contributed_by} onChange={(event) => this.changeState(event)} />
                    </div>

                    {Object.values(this.state).every((value) => value) ? <button className="btn btn-primary mb-5">ADD NEW</button> : <div className="btn btn-secondary mb-5">Add All Fields</div>}
                </form>
            </div>
        );
    };
};