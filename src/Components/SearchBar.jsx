import React, { Component } from 'react'


export class SearchBar extends Component {


    handleSearch = (event) => {    
        const value = event.target.value
        this.props.search(value)
    }
    
    render() {

        return (
                <div className="search__box">
                    <h2>Search</h2>
                    <input className="search__bar" onChange={this.handleSearch} type="text" name="search" id="search"/>
                </div>
        )
    }
}

export default SearchBar
