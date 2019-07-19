import React, { Component } from 'react';
import axios from 'axios';

class AddBeer extends Component {
  constructor(props){
      super(props);          //             will help us to toggle add task form   
                            //                      |
      this.state = { title: "", description: "", isShowing: false };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const projectID = this.props.theProject._id; // <== we need to know to which project the created task belong, so we need to get its 'id'
                                                // it has to be the 'id' because we are referencing project 
                                                // by its id in the task model on the server side ( project: {type: Schema.Types.ObjectId, ref: 'Project'})
    
    // { title, description, projectID } => this is 'req.body' that will be received on the server side in this route, 
    // so the names have to match
    axios.post("http://localhost:5000/new", { title, description, projectID })
    .then( () => {
          // after submitting the form, retrieve project one more time so the new task is displayed as well 
          //              |
        this.props.getTheProject();
        this.setState({title: "", description: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  toggleForm = () => {
      if(!this.state.isShowing){
          this.setState({isShowing: true});
      } else {
        this.setState({isShowing: false});
      }
  }

  showAddBeerForm = () => {
    if(this.state.isShowing){
        return(
            <div>
                  <h3>Add Beer</h3>
                  <form onSubmit={this.handleFormSubmit}>
                  <label>Title:</label>
                  <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
                  <label>Description:</label>
                  <textarea name="description" value={this.state.description} onChange={ e => this.handleChange(e)} />
                  
                  <input type="submit" value="Submit" />
                  </form>
            </div>
          )
    }
  }

  render(){
    return(
      <div>
            <hr />
            <button onClick={() => this.toggleForm()}> Add Beer </button>
            { this.showAddBeerForm() }
      </div>
    )
  }
}

export default AddBeer;