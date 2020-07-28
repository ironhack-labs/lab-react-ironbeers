import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class NewBeer extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
        .then((response) => {
            console.log(response.data)
        })
        .catch((err) => console.log('Error when submiting a new beer', err))
    }

    render() {
        return (
            <div>
                <header className='bg-primary'>
                        <Link to={"/"}>
                            <FontAwesomeIcon className='text-white' icon={faHome}/> 
                        </Link>   
                </header>
                <Form className='content' onSubmit={this.handleSubmit}>
                <FormGroup className='field'>
                        <Form.Label htmlFor="name">Name: </Form.Label>
                        <FormControl className='control' type="text" name="name"/>
                </FormGroup>
                <FormGroup className='field'>
                        <Form.Label htmlFor="tagline">Tagline: </Form.Label>
                        <FormControl className='control'type="text" name="tagline"/>
                </FormGroup>
                <FormGroup className='field'>
                        <Form.Label htmlFor="description">Description: </Form.Label>
                        <FormControl className='control' type="text" name="description"/>
                </FormGroup>
                <FormGroup className='field'>
                        <Form.Label htmlFor="first-brewed">First Brewed: </Form.Label>
                        <FormControl className='control' type="text" name="first-brewed"/>
                </FormGroup>
                <FormGroup className='field'>
                        <Form.Label htmlFor="brewers-tips">Brewers Tips: </Form.Label>
                        <FormControl className='control' type="text" name="brewers-tip"/>
                </FormGroup>
                <FormGroup className='field'>
                        <Form.Label htmlFor="attenuation-level">Attenuation Level: </Form.Label>
                        <FormControl className='control' type="number" name="attenuation-level"/>
                </FormGroup>
                <FormGroup className='field'>
                        <Form.Label htmlFor="contributed-by">Contributed by: </Form.Label>
                        <FormControl className='control' type="text" name="contributed-by"/>
                </FormGroup>
                <Button className='button is-link' type="submit">ADD NEW</Button>
                </Form>
            </div>
        )
    }
}

export default NewBeer
