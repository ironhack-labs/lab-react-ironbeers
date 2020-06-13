import React, { Component } from 'react'

class SearchBeer extends Component
{

    nameChangeHandler = (event) =>{
        let currentInputValue = event.target.value
    }

    render ()
    {
        return (
            <div>
                <input type="text" value={this.state.beerName} onChange={this.nameChangeHandler} />
            </div>
        )
    }
}

export default SearchBeer