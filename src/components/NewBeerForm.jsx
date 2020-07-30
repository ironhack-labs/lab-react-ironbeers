import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

class NewBeerForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newBeer: {
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: 0,
                contributed_by: ''
            }
        }
    }
    handleChange = ({target}) => {
        const {name, value} = target
        this.setState(state => ({
            newBeer: {
                ...state.newBeer,
                [name]: value    
            }     
        }))
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state.newBeer)
        .then(() => {
            this.props.history.push('/beers');
        })
        .catch( error => console.log(error) )
    }
    render() {
        const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state.newBeer
        return (
            <div>
                <Header />
                <form className='px-5 py-4' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label><b>Name</b></label>
                        <input type="text" className="form-control" name='name' value={name} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label><b>Tagline</b></label>
                        <input type="text" className="form-control" name='tagline' value={tagline} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label><b>Description</b></label>
                        <textarea rows='3' className="form-control" name='description' value={description} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label><b>First Brewed</b></label>
                        <input type="text" className="form-control" name='first_brewed' value={first_brewed} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label><b>Brewers Tips</b></label>
                        <input type="text" className="form-control" name='brewers_tips' value={brewers_tips} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label><b>Attenuation Level</b></label>
                        <input type="number" className="form-control" name='attenuation_level' value={attenuation_level} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label><b>Contributed By</b></label>
                        <input type="text" className="form-control" name='contributed_by' value={contributed_by} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">ADD NEW</button>
                </form>
            </div>
        )
    }
}

export default NewBeerForm
