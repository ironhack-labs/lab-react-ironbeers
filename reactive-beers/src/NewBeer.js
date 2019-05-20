import React from 'react'
import Navbar from './Navbar'
import Axios from 'axios'

class NewBeer extends React.Component{

  saveBeer = (e) => {
    e.preventDefault()
    console.log(e.target.elements)
    let {image_url, name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = { ...e.target.elements }
    // console.log(name)
    Axios.post('https://ih-beer-api.herokuapp.com/beers/new', { 
      name: e.target.elements.name.value, 
      tagline: e.target.elements.tagline.value ,
      description: e.target.elements.description.value,
      first_brewed: e.target.elements.first_brewed.value,
      attenuation_level: e.target.elements.attenuation_level.value,
      contributed_by: e.target.elements.contributed_by.value
    })
       .then(responseFromTHeServer=>{
           console.log(responseFromTHeServer)
    })
    .catch(err=>console.error(err))
}

  render(){
    return(
  <div>
<Navbar />
  <div className="form-group-column">
    <form onSubmit={this.saveBeer}>
    
    Name
    <div class="col"><input class = "form-control" type="text" name="name"></input></div>
    Tagline
    <div class="col"><input class = "form-control" type="text" name="tagline"></input></div>
    Descritpion
    <div class="col"><input class = "form-control" type="text" name="description"></input></div>
    First Brewed
    <div class="col"><input class = "form-control" type="text" name="first_brewed"></input></div>
    Brewer's tips
    <div class="col"><input class = "form-control" type="text" name="brewers_tips"></input></div>
    Attenuation level 
    <div class="col"><input class = "form-control" type="number" name="attenuation_level"></input></div>
    Contributed By
    <div class="col"><input class = "form-control" type="text" name="contributed_by"></input></div>
    <div><button type="submit">Add New</button></div>
  
    </form>
    </div>
  </div>

    )
  }
}
export default NewBeer