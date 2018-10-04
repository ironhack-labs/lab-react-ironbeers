import React from 'react';
import axios from 'axios';
import Header from './Header';

export class NewBeer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    submitForm = () => {
        console.log('entra')
        axios.post(`https://ironbeer-api.herokuapp.com/beers/new`)
            .then( () => console.log('entra al post')
            
            ).catch((err)=> {console.log(err)})
    }

    render(){
        // let {title, description} = this.state;
        // let title = this.state.title;
        // let description = this.state.description;
        return (

        <div>
            <Header />

            <form style={{display:'flex', flexDirection:'column', width: '40%'}}>
                <label>Name</label>
                <input type="text" name='name'/>
                <label>tagline</label>
                <input type="text" name='tagline'></input>
                <label>description</label>
                <input type="text" name='description'></input>
                <label>first_brewed</label>
                <input type="text" name='first_brewed'></input>
                <label>brewers_tips</label>
                <input type="text" name='brewers_tips'></input>
                <label>atteniation_level</label>
                <input type="text" name='atteniation_level'></input>
                <label>constributed_by</label>
                <input type="text" name='constributed_by'></input>

                
                <button onClick={this.submitForm}>Add new beer</button>
            </form>

        </div>
            
        );
    }
}