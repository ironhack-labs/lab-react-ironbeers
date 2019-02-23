import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';

class NewBeer extends Component {
    constructor(){
        super();
        this.state={
                name:'',
                tagline:'',
                description:'',
                first_brewed:'',
                image_url:'',
                brewers_tips:'',
                contributed_by:''
        }
    }

    formSubmit = () =>{
        console.log('Button!')
        axios.post('https://ironbeer-api.herokuapp.com/beers/new',{
                name:this.state.name,
                tagline:this.state.tagline,
                description:this.state.description,
                first_brewed:this.state.first_brewed,
                image_url:this.state.image_url,
                brewers_tips:this.state.brewers_tips,
                contributed_by:this.state.contributed_by
        }).then(res => {
            console.log(res);
        })
    }
    handleChange=(event) => {
        let type = event.target.id;
        this.setState({[type]: event.target.value});
      }

    render() {
        return (
            <div className="NewBeer">
            <Header/>
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="text" class="form-control" onChange={this.handleChange} id="name" placeholder="MyAwesomeBeer"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Tagline</label>
                    <input type="text" class="form-control" onChange={this.handleChange} id="tagline" placeholder="Beautifuly Done"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" onChange={this.handleChange} id="description" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">First Brewed</label>
                    <input type="date" onChange={this.handleChange} class="form-control" id="first_brewed"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Image</label>
                    <input type="text" onChange={this.handleChange} class="form-control" id="image_url" placeholder="put and image url here"/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Attenuation Level</label>
                    <select class="form-control" onChange={this.handleChange} id="attenuation_level">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Contributed By</label>
                    <input type="text" class="form-control" onChange={this.handleChange} id="exampleFormControlInput1"/>
                </div>
                </form>
                <button className="btn btn-info" onClick={this.formSubmit}>Submit</button>
            </div>
            )
    }
}

export default NewBeer;