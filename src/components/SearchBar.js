import React, { Component } from 'react'

export default class SearchBar extends Component {

    constructor(props) { 
        super(props); 
        this.handleChange = this.handleChange.bind(this);
        this.state = { 
            query:''
        } 
    } 

    handleChange = (e) => {

        this.setState({
            query: this.state.query + e.target.value
        }, () => {
            console.log(this.state)
            this.props.updateQuery(this.state.query)
            })   
        
    }

    render() {
        return (
            <div>
                <div>
            <label>Search: </label>
            <input type='text' onChange={this.handleChange} value={this.props.newString}/>
        </div>        
            </div>
        )
    }
}

