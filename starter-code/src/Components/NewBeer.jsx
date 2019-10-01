import React from 'react';
import NavBar from './Navbar';
import axios from 'axios'

class NewBeer extends React.Component {

    constructor(props){
        super(props);

        this.state={
            newName:"",
            newTagLine:"",
            newDescription:"",
            newContributor:"",
            newfirst_brewed:"",
            newbrewers_tips:"",
            newattenuation_level:"",
            newContributed_by:""

        }
    }

    handleInput = (e) => {
this.setState({
    [e.target.name]: e.target.value
})
    }

    addNewBeer = (e) => {
        e.preventDefault();

        const newBeer = {
            name: this.state.newName,
            tagline: this.state.newTagLine,
            description: this.state.newDescription,
            first_brewed: this.state.newfirst_brewed,
            brewers_tips: this.state.newbrewers_tips,
            attenuation_level: this.state.newattenuation_level,
            contributed_by: this.state.newContributed_by
        }

        return axios.post(`${this.props.theUrl}/new`, newBeer)
        .then(theNewBeer => {
            
            this.props.history.push('/')
        }).catch(err => {
            console.log(err)
        })
    }

    render(){
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <form onSubmit={this.addNewBeer}>

  <div class="form-group">
    <label >name</label>
    <input type="text" className="form-control" name="newName" aria-describedby="emailHelp" placeholder="Enter name" onChange={ (e) => { this.handleInput(e)}} />
  </div>

  <div className="form-group">
    <label >tagline </label>
    <input type="text" className="form-control" name="newTagLine" placeholder="tagline" onChange={ (e) => { this.handleInput(e)}} />
  </div>

  <div>
  <label >Description </label>
    <input type="text" className="form-control" name="newDescription" placeholder="Description" onChange={ (e) => { this.handleInput(e)}}/>
  </div>

  <div>
  <label >First brewed</label>
    <input type="text" className="form-control" name="newfirst_brewed" placeholder="First brewed" onChange={ (e) => { this.handleInput(e)}}/>
  </div>

  <div>
  <label >Brewers Tips</label>
  <input type="text" className="form-control" name="newbrewers_tips" placeholder="Brewers Tips" onChange={ (e) => { this.handleInput(e)}}/>
  </div>

  <div>
  <label >Attenuation Level</label>
  <input type="number" className="form-control" name="newattenuation_level" placeholder="Attenuation Level" onChange={ (e) => { this.handleInput(e)}}/>
  </div>

  <div>
  <label >Contributed by</label>
  <input type="text" className="form-control" name="newContributed_by" placeholder="Contributed by" onChange={ (e) => { this.handleInput(e)}}/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>

</form>
            </div>
        )
    }
}

export default NewBeer