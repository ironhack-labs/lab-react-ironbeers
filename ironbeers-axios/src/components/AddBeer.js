import React, {Component} from 'react';
import axios from 'axios';



class AddBeer extends Component {

  handleSubmit = (event) => {
    event.preventDefault() 
    let {
        name, 
        tagline, 
        description, 
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by
    } = event.target



    console.log(name.value,tagline.value)


    let postObj = { //We are sending this to our api -- this will be req.body on the server side
        name:name.value, 
        tagline:tagline.value, 
        description:description.value, 
        first_brewed:first_brewed.value,
        brewers_tips:brewers_tips.value,
        attenuation_level:Number(attenuation_level.value),
        contributed_by:contributed_by.value
    }

  


  axios.post("https://ironbeer-api.herokuapp.com/beers/new" , postObj ).then(res=>{
  }).catch(err => console.log )

  }
  render(){

    return(
      <div>
          <h1>New Beer</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="name"/>
                    <input type="text" name="tagline" placeholder="tagline"/>
                    <input type="text" name="description" placeholder="description"/>
                    <input type="text" name="first_brewed" placeholder="first brewed"/>
                    <input type="text" name="brewers_tips" placeholder="tips"/>
                    <input type="number" name="attenuation_level" placeholder="attenuation level"/>
                    <input type="text" name="contributed_by" placeholder="contributed by"/>
                    <button type='submit'>
                        Save Beer
                    </button>
                </form>
      </div>
    )
  }
}

export default AddBeer;