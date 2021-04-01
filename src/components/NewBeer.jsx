import React from 'react';
import { Redirect } from 'react-router';
import { createBeer } from '../services/BaseService';

class NewBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
        redirect: false
    }

    onChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
        e.preventDefault();

        createBeer({name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
            .then(() => this.setState({redirect: true}))
            .catch(err => console.log(err));
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, redirect } = this.state;

        if (redirect) {
            return <Redirect to='/' />
        }

        return(
            <div className='NewBeer container'>
                <h1>Create New Beer</h1>
                <form>
                    <div className="form-group">
                        <input
                            type="text" className="form-control mb-2" name="name"
                            id="name" placeholder="Name" autoComplete="off"
                            onChange={this.onChange} value={name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control mb-2" name="tagline"
                            id="tagline" placeholder="Tagline" autoComplete="off"
                            onChange={this.onChange} value={tagline}
                        />
                    </div>                    
                    <div className="form-group">
                        <textarea
                            className="form-control mb-2" name="description"
                            id="description" placeholder="Description" autoComplete="off"
                            onChange={this.onChange} value={description}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control mb-2" name="first_brewed"
                            id="first_brewed" placeholder="First time brewed (Date)" autoComplete="off"
                            onChange={this.onChange} value={first_brewed}
                        />             
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control mb-2" name="brewers_tips"
                            id="brewers_tips" placeholder="Brewers Tips" autoComplete="off"
                            onChange={this.onChange} value={brewers_tips}
                        />             
                    </div>
                    <div className="form-group">
                        <input
                            type="number" className="form-control mb-2" name="attenuation_level"
                            id="attenuation_level" placeholder="Attenuation Level (Number)" autoComplete="off"
                            onChange={this.onChange} value={attenuation_level}
                        />             
                    </div>
                    <div className="form-group">
                        <input
                            type="text" className="form-control mb-2" name="contributed_by"
                            id="contributed_by" placeholder="Beer created by:" autoComplete="off"
                            onChange={this.onChange} value={contributed_by}
                        />             
                    </div>
                    <button type="submit" className="btn text-white" style={{backgroundColor: '#3ec4fc'}}>Create</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;