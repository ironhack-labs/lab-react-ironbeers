import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {
  constructor(props){
      super(props);          //             will help us to toggle add task form   
                            //                      |
      this.state = {name: "beer name", tagline: "your beer tagline", image_url: "your photo URL", contributed_by: "your contributor"};
  }
 
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const image_url = this.state.image_url;
    const contributed_by = this.state.contributed_by;

    // const projectID = this.props.theProject._id; // <== we need to know to which project the created task belong, so we need to get its 'id'
                                                // it has to be the 'id' because we are referencing project 
                                                // by its id in the task model on the server side ( project: {type: Schema.Types.ObjectId, ref: 'Project'})
    
    // { name, tagline, projectID } => this is 'req.body' that will be received on the server side in this route, 
    // so the names have to match
    axios.post("http://localhost:5000/new", { name,tagline, image_url, contributed_by })
    .then( () => {
          // after submitting the form, retrieve project one more time so the new task is displayed as well 
          //              |
        
        this.setState({name: "", tagline: "", image_url: "", contributed_by: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value } = event.target;
      this.setState({[name]: value});
  }



  showNewBeerForm = () => {
   
        return(
            <div>
                  <h3>Add Beer</h3>
                  <form onSubmit={this.handleFormSubmit}>
                  <label>name:</label>
                  <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
                  <label>tagline:</label>
                  <textarea name="tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)} />
                  <label>image</label>
                  {/* <input type="text" name="image" value={this.state.image_url} onChange={ e => this.handleChange(e)}/> */}
                  <input type="text" name="image_url"  value={this.state.image_url} onChange={ e => this.handleChange(e)}/>

                  <label>contributed_by</label>
                  <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>

                  <input type="submit" value="Submit" />
                  
                  </form>
            </div>
          )
    
  }

  render(){
    return(
      <div>
            <hr />
            { this.showNewBeerForm() }
      </div>
    )
  }
}

export default NewBeer;