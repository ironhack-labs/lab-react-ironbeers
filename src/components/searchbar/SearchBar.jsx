import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = {
        search: ''
    }

    changeHandler = (e) => {
        let { name, value } = e.target

        this.setState({ [name]: value }, this.handleSubmit)
        this.handleSubmit()
    }

    handleSubmit = () => {
        this.props.searchTerm(this.state)
  
    }


    render() {
        return (
        <div>
                <p>Search</p>
                <form >
                    <input 
                        type="text" 
                        name="search" 
                        placeholder="Search..." 
                        value={this.state.search}
                        onChange={this.changeHandler}
                    />
                </form>
            </div>
        )
    }
}
