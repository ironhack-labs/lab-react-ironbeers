import React ,{ Component } from "react";
import NavBar from "./NavBar";
import axios from 'axios';
class NewBeer extends Component{
  state={
      name:"",
      tagline:"",
      description:"",
      first_brewed:"",
      attenuation_level:0,
      contributed_by:"",
      brewers_tips:"",
      btsOn :"",
      sendMessage:""
  }


  submit(event){
    
    let beer ={
      name:this.state.name,
      tagline:this.state.tagline,
      description:this.state.description,
      first_brewed:this.state.first_brewed,
      attenuation_level:this.state.attenuation_level,
      contributed_by:this.state.contributed_by,
      brewers_tips:this.state.brewers_tips
    }
 
    event.preventDefault()
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new",beer).then(()=>this.setState({btsOn:"bts-on",sendMessage:"Successful in 'ADD NEW'"})).catch(()=>this.setState({btsOn:"bts-off",sendMessage:"Fail in 'ADD NEW'" }))

    console.log(beer)
   this.setState({
    
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    attenuation_level:0,
    contributed_by:"",
    brewers_tips:""
    

   })

  
  }
  changeOnHand= async(e)=>{
    let {name,value} =  e.target


    await this.setState({
      [name]:value
    })

    

  }
    render(){
      
        return(<>

        <NavBar/>
        <div className="form-addNew">
        <form  onSubmit={(e)=>this.submit(e)} id="beer-form">
            <label for="name">Name</label><br/>
            <input name="name" type="text" onChange={(e)=>{this.changeOnHand(e)}} value={this.state.name}></input><br/>

            <label for="tagline">Tagline</label><br/>
            <input name="tagline" type="text" onChange={(e)=>{this.changeOnHand(e)}} value={this.state.tagline}></input><br/>

            <label>Description</label><br/>
            <textarea name="description" value={this.state.description} form="beer-form" rows="5" cols="50" onChange={(e)=>{this.changeOnHand(e)}}></textarea><br/>

            <label for="first_brewed">First Brewed</label><br/>
            
            <input name="first_brewed" type="text" value={this.state.first_brewed} onChange={(e)=>{this.changeOnHand(e)}}></input><br/>

            <label for="brewers_tips">Brewers Tips</label><br/>
            <input name="brewers_tips" type="text" value={this.state.brewers_tips} onChange={(e)=>{this.changeOnHand(e)}}></input><br/>

            
            <label for="attenuation_level">Attenuation Level</label><br/>
            <input name="attenuation_level" value={this.state.attenuation_level} type="number" step=".1" onChange={(e)=>{this.changeOnHand(e)}}></input><br/>

            <label for="contributed_by">Contributed By</label><br/>
            <input name="contributed_by" value={this.state.contributed_by} type="text" onChange={(e)=>{this.changeOnHand(e)}}></input><br/>
            <div className="btn-addNew">
            <button className={this.state.btsOn} type="submit">ADD NEW</button>
            </div>


        </form>
        <h5 className="message-submit">{this.state.sendMessage}</h5>
        </div>
        
        </>)
    }
}

export default NewBeer