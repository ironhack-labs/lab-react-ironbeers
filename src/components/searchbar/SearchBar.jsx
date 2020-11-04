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
        <div className='mx-5 my-5'>
                <p className="font-weight-bold mt-3">Search</p>
                <form className='form-group'>
                    <input 
                        className="form-control"
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
