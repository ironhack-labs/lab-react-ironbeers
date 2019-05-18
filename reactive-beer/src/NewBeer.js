import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {

  getnewbeer (e) {
    e.preventDefault();
    console.log(e.target.elements.name.value)
    axios.post("https://ih-beer-api.herokuapp.com/beers/new",{
    name: e.target.elements.name.value,
    tagline: e.target.elements.tagLine.value,
    description: e.target.elements.description.value,
    first_brewed: e.target.elements.firstBrewed.value,
    brewers_tips: e.target.elements.brewersTips.value,
    attenuation_level: e.target.elements.attenuationLevel.value,
    contributed_by: e.target.elements.contributedBy.value
    }

    )
    .then(newbeer =>{

    });

  
  }


  render() {
    return (
      <div style={{
        margin: "20px 0"
      }}>
      <div style={{
        width:"300px",
        margin: "0 auto",
        justifyContent:"center",
        alignContent: "center",
        alignItems: "center",
        border: "2px solid lightblue",
        padding: "0",
    
      }}>
        <form onSubmit={this.getnewbeer}>
        <h3 style={{
          backgroundColor:"lightblue",
          margin: "0"
        }}>Name</h3>
        <input name="name" type="text" style={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "10px 15px",
          margin:"15px 0 0 0",
          
        }}></input>
        <h3 style={{
          backgroundColor:"lightblue"
          
        }}>Tagline</h3>
        <input name="tagLine" type="text" style={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "10px 15px"
        }}></input>
        <h3 style={{
          backgroundColor:"lightblue"
        }}>Description</h3>
        <input name="description" type="text" style={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "10px 15px"
        }}></input>
        <h3 style={{
          backgroundColor:"lightblue"
        }}>First Brewed</h3>
        <input name="firstBrewed" type="text" style={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "10px 15px"
        }}></input>
        <h3 style={{
          backgroundColor:"lightblue"
        }}>Brewers Tips</h3>
        <input name="brewersTips" type="text" style={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "10px 15px"
        }}></input>
        <h3 style={{
          backgroundColor:"lightblue"
        }}>Attenuation Level</h3>
        <input name="attenuationLevel" type="number" style={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "10px 15px"
        }}></input>
        <h3 style={{
          backgroundColor:"lightblue"
        }}>Contributed By</h3>
        <input name="contributedBy" type="text" style={{
          border: "2px solid black",
          borderRadius: "20px",
          padding: "10px 15px"
        }}></input>
        <br></br>
        <button style={{
          backgroundColor:"lightblue",
          padding: "15px 50px",
          borderRadius: "10px",
          margin: "20px 0"
        }}>ADD NEW</button>
        </form>
      </div>
      </div>
    );
  }
}

export default NewBeer;