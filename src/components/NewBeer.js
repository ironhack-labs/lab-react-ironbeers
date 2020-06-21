import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class NewBeer extends React.Component{

    state = {

    }

    handleAddBeer = (e) =>{
        e.preventDefault()
        let name = e.target.name.value
        let tagline = e.target.tagline.value
        let description = e.target.description.value
        let first_brewed = e.target.FirstBrewed.value
        let brewers_tips = e.target.brewerTips.value
        let attenuation_level = e.target.attLevel.value
        let contributed_by = e.target.contBy.value
        console.log(name)
        console.log(description)
        console.log(description)
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',{
        name : name,
        tagline : tagline,
        description : description,
        first_brewed : first_brewed,
        brewers_tips : brewers_tips,
        attenuation_level : attenuation_level,
        contributed_by : contributed_by
        })
        .then((res)=>{
            console.log(res)
        },()=>{
            this.props.history.push('/beers')
          })
    }

    render(){
        return(
            <>
                <Link to='/'>HOME PAGE</Link>
                <form onSubmit={this.handleAddBeer}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Tagline</label>
                    <input name='tagline' type="text" class="form-control" id="exampleInputPassword1" placeholder="tagline" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input  name='description'type="text" class="form-control" id="exampleInputPassword1" placeholder="description" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">First Brewed</label>
                    <input name='FirstBrewed' type="text" class="form-control" id="exampleInputPassword1" placeholder="firstbewed" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Brewer Tips</label>
                    <input  name='brewerTips' type="text" class="form-control" id="exampleInputPassword1" placeholder="brewertips" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">att level</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="att level" name='attLevel'/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">contributed by</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder='contributed by' name='contBy' />
                </div>
                
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </>
        )
    }
} 