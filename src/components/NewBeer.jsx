import React from 'react';
import Input from './Input';
const axios = require('axios');

class NewBeer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: '',
                tagline: '',
                description: '',
                firstBrewed: '',
                brewersType: '',
                atenuationLevel: '',
                contributedBy: ''
            }
        }
    }
    

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ 
            data: {
                ...this.state.data,
                [name]: value,
            }
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        //action="https://ih-beers-api2.herokuapp.com/beers/new"
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state.data)
            .then( response => {
                console.log(response)
            })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler} className="mt-3">
                { Object.keys(this.state.data).map( e => {
                    return (
                        <Input 
                            name={ e }
                            value={ this.state.data[e]}
                            onChange={this.handleChange}
                        />
                    )
                }) }
                <button 
                    className="button m-4 p-2"
                    style={{ borderRadius: '2rem', backgroundColor: 'rgb(45, 197, 250)', color: 'white', border: 'none', width: '80vw'}}
                    type="submit"

                >
                    ADD NEW
                </button>
            </form>
        )
    }
   
}
    


export default NewBeer;