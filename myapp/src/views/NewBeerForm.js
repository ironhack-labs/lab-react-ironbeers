import React from 'react';
import axios from 'axios';

export default class NewBeerForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            brewers_tips:'',
            attenuation_level:'',
            contributed_by:''
        }
    }

    createNewBeer() {
        axios.post('https://ironbeer-api.herokuapp.com/beers/new', this.state)
        .then(() => window.location.replace('http://localhost3000/'))
        .catch(e => console.log(e))
    }

    render() {
        return(
            <div className="d-flex container flex-column my-3 justify-content-start align-items-start col-6 form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control mb-3" onChange={e => this.setState({name: e.currentTarget.value})}></input>
                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" className="form-control mb-3" onChange={e => this.setState({tagline: e.currentTarget.value})}></input>
                <label htmlFor="description">Description</label>
                <input type="textarea" name="description" className="form-control mb-3" onChange={e => this.setState({description: e.currentTarget.value})}></input>
                <label htmlFor="first_brewed">First brewed</label>
                <input type="date" name="first_brewed" className="form-control mb-3" onChange={e => this.setState({first_brewed: e.currentTarget.value})}></input>
                <label htmlFor="brewers_tips">Breqer's tips</label>
                <input type="text" name="brewers_tips" className="form-control mb-3" onChange={e => this.setState({brewers_tips: e.currentTarget.value})}></input>
                <label htmlFor="attenuation_level">Attenuation level</label>
                <input type="number" name="attenuation_level" className="form-control mb-3" onChange={e => this.setState({attenuation_level: e.currentTarget.value})}></input>
                <label htmlFor="contributed_by">Contributed by</label>
                <input type="text" name="contributed_by" className="form-control mb-3" onChange={e => this.setState({contributed_by: e.currentTarget.value})}></input>
                <button  className="btn btn-dark" onClick={this.createNewBeer.bind(this)}>Create new beer</button>

            </div>
        )
    }
}