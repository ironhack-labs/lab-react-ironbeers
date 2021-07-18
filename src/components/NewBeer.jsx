import React from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import {Button, TextField, Typography} from '@material-ui/core';


class NewBeer extends React.Component {
    state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
    }



    handleChange = (event) => {
        let { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }



    handleFormSubmit = async (event) => {
        event.preventDefault(); //prevents that the page is realoded
        console.log(this.state);
        const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state);
        console.log('checking now', response.data)
        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
            
        },  () => {
        
            this.props.history.push('/')
        })
        
        
    };






render() {
    const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state;
    return (
        <>
            <Navbar />
            <form onSubmit={this.handleFormSubmit}>
                <Typography>Name</Typography>
                <br></br>
                <TextField id="outlined-basic" label="Name" variant="outlined"  onChange={this.handleChange} value={name} />
                <br></br>
                <Typography>Tagline</Typography>
                <br></br>
                <TextField id="outlined-basic" label="Tagline" variant="outlined" onChange={this.handleChange} value={tagline} />
                <br></br>
                <Typography>Description</Typography>
                <br></br>
                <TextField id="outlined-basic" label="Description" variant="outlined"  onChange={this.handleChange} value={description} />
                <br></br>
                <Typography>First brewed</Typography>
                <br></br>
                <TextField id="outlined-basic" label="1º Brewed" variant="outlined"  onChange={this.handleChange} value={first_brewed} />
                <br></br>
                <Typography>Brewer tips</Typography>
                <br></br>
                <TextField id="outlined-basic" label="Brewer Tips" variant="outlined"  onChange={this.handleChange} value={brewers_tips} />
                <br></br>
                <Typography>Attenuation level</Typography>
                <br></br>
                <TextField id="outlined-basic" label="Attenuation %" variant="outlined"  onChange={this.handleChange} value={attenuation_level} />
                <br></br>
                <Typography>Contributed by</Typography>
                <br></br>
                <TextField id="outlined-basic" label="Contributed by" variant="outlined"  onChange={this.handleChange} value={contributed_by} />
                <br></br>
                <br></br>
        <Button variant="contained" color="primary" size="small" className="Create" >New Beer</Button>
            </form>
        </>
    )
}
}

export default NewBeer;

