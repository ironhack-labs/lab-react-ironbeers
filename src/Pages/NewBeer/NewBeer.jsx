import React, { Component } from 'react'
import './NewBeer.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class NewBeer extends Component {
    constructor(props){
        super(props)

        this.state = {
            form: {
                name: '',
                tagline: '', 
                description: '',
                first_brewed: '',
                attenuation_level: null,
                contributed_by: ''
            }
        }

        this.handleCreate = this.handleCreate.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleCreate(e){
        e.preventDefault()
        if(this.state.form.name === '') return

        const data = {...this.state.form}
        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", data)
        .then((response) => {
          this.props.history.push("/beers");
        })
        .catch((err) => console.log(err));
    }

    handleFocus(e){
        e.target.placeholder = ''
    }

    handleBlur(e){
        e.target.placeholder = capitalize(e.target.name).split('_').join(' ')
    }

    handleChange(e){
        const form = {...this.state.form}
        form[e.target.name] = e.target.value
        this.setState(
            {form}
        )
    }

    render() {
        return (

            <form className='beer-form' onSubmit={this.handleCreate}>
                <input type="text" id='name' name='name' placeholder='Name'value={this.state.name} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}/>
                <input type="text" id='tagline' name='tagline' placeholder='Tagline' value={this.state.tagline} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}/>
                <textarea name="description" id="description" placeholder='Description' cols="30" rows="10" value={this.state.description} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}></textarea>
                <input type="string" id='first_brewed' name='first_brewed' placeholder='First Brewed' value={this.state.first_brewed} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}/>
                <input type="number" name="attenuation_level" id="attenuation_level" placeholder="Attenuation level" value={this.state.attenuation_level} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}/>
                <input type="text" id='contributed_by' name='contributed_by' placeholder='Contributed by'value={this.state.contributed_by} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}/>
                <button className='create-btn'>Create new bear !</button>
            </form>

        )
    }
}

export default withRouter(NewBeer)


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }