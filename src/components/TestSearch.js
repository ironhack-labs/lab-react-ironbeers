import React, { Component } from 'react';

class Searchbox extends Component {

    state = {
        name: '',       
    }

    handleChange(event) {
        let { name, value } = event.target;

        this.setState({ [name]: value });
    }


    handleFormSubmit = (event) => {
        event.preventDefault();

        componentDidMount() {
            axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({beers: response.data})
                console.log(response.data)
            })
        }


        let searchedFood = {
            name: this.state.name,
            calories: this.state.calories,
            image: this.state.image,
            quantity: this.state.quantity


        }

        this.props.findFood(searchedFood)

        this.setState({



            name: '',
            calories: 0,
            image: '',
            quantity: 0
        })
    }

   

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="searchbox" value={this.state.searchbox} onChange={(e) => this.handleChange(e)} />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}


    export default Searchbox;