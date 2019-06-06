import React, { Component } from 'react'


class AddBeer extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(props)
    }


    // handleChange = e => {
    //     let { name, value } = e.target
    //     this.setState({ [name]: value })
    // }

    // handleFormSubmit = e => {
    //     e.preventDefault()
    //     this.props.addFood(this.state)
    //     this.setState({ name: '', image: '', calories: '', quantity: '' })
    // }

    render() {
        return (

            <form onSubmit={this.handleFormSubmit}>
                {/* <label>Name:
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                </label>
                <label>Image:
                <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                </label>
                <label>Calories:
                <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)} />
                </label>
                <label>Quantity:
                <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />
                </label>
                <input type="submit" value="enviar" /> */}
            </form>

        )
    }


}


export default AddBeer