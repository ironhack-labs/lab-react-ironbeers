import React from 'react';
import BeersService from '../../services/beers.services';
import './NewBeer.css'
import HomeButton from '../HomeButton/HomeButton'



class NewBeer extends React.Component {
    constructor() {
        super()


        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: 0,
            contributed_by: "",
            // image_url: ""
        }

        this.service = new BeersService()
        
    }


    handleSubmit = (e) => {
        e.preventDefault();
    
        this.service.createBeer(this.state)
          .then(() => this.props.history.push('/beer-list'))
          .catch(err => console.log(err))
    
      }


    handleChange = (e) => {
        const { name, value } = e.currentTarget
    
        this.setState({ [name]: value })
      }


    render() {
        return(
            <>  
                <div>
                    <HomeButton />

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name: <input onChange={this.handleChange} value={this.state.name} type='text' name='name' />
                        </label>

                        <label>
                            Tagline: <input onChange={this.handleChange} value={this.state.tagline} type='text' name='tagline' />
                        </label>

                        <label>
                            Description: <input onChange={this.handleChange} value={this.state.description} type='text' name='description' />
                        </label>

                        <label>
                            First Brewed: <input onChange={this.handleChange} value={this.state.first_brewed} type='text' name='first_brewed' />
                        </label>

                        <label>
                            Brewers Tips: <input onChange={this.handleChange} value={this.state.brewers_tips} type='text' name='brewers_tips' />
                        </label>

                        <label>
                            Attenuation Level: <input onChange={this.handleChange} value={this.state.attenuation_level} type='number' name='attenuation_level' />
                        </label>

                        <label>
                            Contributed By: <input onChange={this.handleChange} value={this.state.contributed_by} type='text' name='contributed_by' />
                        </label>

                        {/* <label>
                            Image: <input onChange={this.handleChange} value={this.state.image_url} type='text' name='image_url' />
                        </label> */}

                        <input type="submit" value="Add new beer" />

                    </form>
                </div>
            </>
        )
    }
}


export default NewBeer