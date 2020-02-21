import React, { Component } from 'react'
import Header from './Partials/Header'
import axios from "axios"; 

export class AddBeer extends Component {
    state = {
        APIEndpoint:
            "https://ih-beers-api2.herokuapp.com/beers/new",
        name:'',
        tagline: '',
        description: '',
        first_brewed: '',
        attenuation_level : null,
        contributed_by: '',



    };

    
    
    handleChangeName = event => {
        this.setState({ name: event.target.value });
    }

    handleChangeTagline = event => {
        this.setState({ tagline: event.target.value });
    }
      
    
    handleChangeDescription = event => {
        this.setState({ description: event.target.value });
    }

    handleChangefirstBrewed = event => {
        this.setState({ first_brewed: event.target.value });
    }

    handleChangeAttenuation = event => {
        this.setState({ attenuation_level: event.target.value });
    }

    handleChangeContributed = event => {
        this.setState({ contributed_by: event.target.value });
    }

    


      

    handleSubmit = event => {
        event.preventDefault();
        const newBeer = {
            "image_url": "https://images.punkapi.com/v2/keg.png",
            "name": this.state.name,
            "description": this.state.description,
            "tagline": this.state.tagline,
            "first_brewed": this.state.first_brewed,
            "attenuation_level" : this.state.attenuation_level,
            "contributed_by" : this.state.contributed_by
        }

        axios
            .post(this.state.APIEndpoint, newBeer)
            .then(apiRes =>  {
                console.log(apiRes);
                console.log(apiRes.data);

            })
            .catch(apiErr => console.error(apiErr));
    }

    render() {
        return (
            <div>
            <Header></Header>
            <h1>Add a Beer</h1>
            <form  className="beerForm" onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleChangeName}/>
      
                <label>Tagline:</label>
                <input type="text" name="tagline"  onChange={this.handleChangeTagline}/>
      
                <label>Description:</label>
                <input type="text" name="description" onChange={this.handleChangeDescription} />
                
                <label>First Brewed:</label>
                <input type="text" name="first_brewed" onChange={this.handleChangefirstBrewed}  />

                <label>Attenuation Level:</label>
                <input type="number" name="attenuation_level" onChange={this.handleChangeAttenuation}/>

                <label>Contributed by:</label>
                <input type="text" name="contributed_by" onChange={this.handleChangeContributed} />
                
                <input type="submit" value="Submit" />
            </form>
          </div>
        )
    }
}

export default AddBeer

// export class AddBeer extends Component {

//     render() {
//         return (
//             <div>
//             <Header></Header>
//             <h1>Add a Beer</h1>
//             <form method="POST" action="https://ih-beers-api2.herokuapp.com/beers/new" className="beerForm">
//                 <label>Name:</label>
//                 <input type="text" name="name" />
      
//                 <label>Tagline:</label>
//                 <input type="text" name="tagline"  />
      
//                 <label>Description:</label>
//                 <input type="text" name="description"  />
                
//                 <label>First Brewed:</label>
//                 <input type="text" name="first_brewed"  />

//                 <label>Attenuation Level:</label>
//                 <input type="number" name="attenuation_level"  />

//                 <label>Contributed by:</label>
//                 <input type="text" name="contributed_by"  />
                
//                 <input type="submit" value="Submit" />
//             </form>
//           </div>
//         )
//     }
// }