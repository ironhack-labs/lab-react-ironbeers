import React from 'react';
import axios from 'axios';
import '../App.css';


class NewBeer extends React.Component {
    state = {
            name: "",
            tagline: "",
            description: "",
           
    }

    onAddName = event => {
        this.setState ({
            name: event.target.value
        })
    }
    
    onAddTagline = event => {
        this.setState({
            tagline: event.target.value
        });
    }
    
    onAddDescription = event => {
        this.setState({
            description: event.target.value
        });
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: this.state.name,
            tagline: this.state.tagline,
            description: this.state.description
        };
        
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', data)
            .then(response => 
            console.log(response))
            .catch(err => console.log(err));
    };

    render() {
        return (
          <div>
              <h1>add a new beer</h1>

                  <form onSubmit={this.handleSubmit}>
                      <div>
                          <label>Beer Name: </label>
                          <input
                          type="text"
                          name="name"
                          id="name"
                          value={this.state.name} 
                          
                          // the function this.updateName recieves parameter event; event shall be a pramater in the updateName(), like updateName(event)
                          onChange={this.onAddName}
                          style={{ width: '50%' }}
                          />
                        
                      </div>
                       <div>
                          <label>Tagline: </label>
                          <input
                          type="text"
                          name="name"
                          id="name"
                          value={this.state.tagline} 
                         
                          onChange={this.onAddTagline}
                          style={{ width: '50%' }}
                          />
                      </div>
                      <div>
                          <label>Description: </label>
                          <input
                          type="text"
                          name="name"
                          id="name"
                          value={this.state.description} 
                          onChange={this.onAddDescription}
                          style={{ width: '50%' }}
                          />
                      </div> 
                      <button type="submit">submit</button>
                    </form>
          </div>
      
         
        );
      }
}


export default NewBeer;