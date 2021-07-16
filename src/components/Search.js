import React from "react"

class Search extends React.Component{
    state={
        word:""
    }

    wordChange = (event)=>{
        let {name, value} = event.target
        this.setState({
            [name]: value,
        })
        this.props.filterBeers(value)
    }

    render(){
        const {word} = this.state
        return(
            <input id="searchs" type="text" name="word" onChange={this.wordChange} value={word} placeholder="Search Beers"/>
        )
    }

}

export default Search