import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../Components/NavBar'


export default class NewBeer extends Component {

    state = {
        name: '',
        description: '',
        tagline: '',
        first_brewed: '',
        brewers_tips:'',
        attenuation_level:'',
        contributed_by:''
    }

    onChangeHandler = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
      }

      submitHandler= (e) => {
        e.preventDefault()
        const {name, description, tagline, firstBrewed,  brewersTips, attenuationLevel, contributedBy} = e.target
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: name.value,
            tagline: tagline.value,
            description: description.value,
            first_brewed: firstBrewed.value,
            brewers_tips: brewersTips.value,
            attenuation_level: attenuationLevel.value,
            contributed_by: contributedBy.value
        })

        .then(res => {
          axios.get('https://ih-beers-api2.herokuapp.com/beers')
          .then(res => {
            this.setState({
              beers: res.data
            })
            console.log(this.props)
            this.props.history.push('/')
          })
        })
        }

    render() {
        return (
            <div>
                <NavBar />
            <form onSubmit={this.submitHandler}>
                <label htmlFor="name">Name</label><br></br>
                <input type="text" name="name" onChange={this.changeHandler}></input><br></br>
                <label htmlFor="tagline">Tagline</label><br></br>
                <input type="text" name="tagline" onChange={this.changeHandler}></input><br></br>
                <label htmlFor="description">Description</label><br></br>
                <input type="text" name="description" onChange={this.changeHandler}></input><br></br>
                <label htmlFor="firstBrewed">First Brewed</label><br></br>
                <input type="text" name="firstBrewed" onChange={this.changeHandler}></input><br></br>
                <label htmlFor="brewersTips">Brewers Tips</label><br></br>
                <input type="text" name="brewersTips" onChange={this.changeHandler}></input><br></br>
                <label htmlFor="attenuationLevel">Attenuation Level</label><br></br>
                <input type="number" name="attenuationLevel" onChange={this.changeHandler}></input><br></br>
                <label htmlFor="contributedBy">Created By</label><br></br>
                <input type="text" name="contributedBy" onChange={this.changeHandler}></input><br></br>
                <button type="submit" onChange={this.changeHandler}>Add new</button>
            </form>
        </div>
           
        )
    }
}
