import React, { Component } from 'react';
import axios from 'axios';


class NewBeer extends Component () {
    state = {
    image: '',
    name: '',
    tagline: '',
    firstBrewed: '',
    attenuationLevel: '',
    description: '',
    contributedBy: '',
    }
    
    handleSubmitForm = async () => {
        const response = await axios.post(
          `https://ih-beers-api2.herokuapp.com/beers`,
          this.state
        );
      };


      handleChange = (event) => {
      let value = event.target.value;
      let name = event.target.name;
      this.setState({
          [name]: value,
      })
      }

      render (){
          return (
              <>
             <form onSubmit={this.handleSubmitForm}>

                 <label></label>
                 <input type=""  value={} onChange={} />

                 <label></label>
                 <input type=""  value={} onChange={} />

                 <label></label>
                 <input type=""  value={} onChange={} />

                 <label></label>
                 <input type=""  value={} onChange={} />
             </form>
              </>
          )
      }



}

export default NewBeer; 
