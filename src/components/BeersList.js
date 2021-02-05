import React, { Component } from 'react'
import Beer from './Beer'
import SearchBar from './SearchBar'

export default class BeersList extends Component {

    constructor(props) { 
        super(props); 
        this.updateQuery = this.updateQuery.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.state = { 
            beers: [], 
            error: null, 
            isLoading: false,
            query:''
        } 
    } 

    updateQuery(queryString) {
        this.setState({
            query: queryString
        })
    }

    fetchData() {
        
        this.setState({isLoading: true})

    
        let api_url = `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.query}`;

        console.log(api_url)

        fetch(api_url)
        .then( response => {
                if(response.status >= 400) {
                    throw new Error("Error from server");
                }
                return response.json(); //this is what is called "beers" in the following then().
            })
            .then( beers => {
                this.setState({
                    beers,
                    isLoading: false
                })
            },
            error => {
                this.setState({
                    error,
                    isLoading: false
                })
            })


    }


componentDidMount () {
    this.fetchData();
}

componentDidUpdate (prevProps, prevState, Snapshot) {

    if(this.state.query !== prevState.query) {
        this.fetchData();
    }
}

    render() {

        let {beers, error, isLoading} = this.state;

        let fullList = beers.map(beer => {
            return <Beer key={beer._id} {...beer} />
        })

        if (error) {
            return (
                <div>{error.message}</div>
            )
        }

        if (isLoading) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div>
                {
                beers.length > 0 ? 
                    <div>
                        <SearchBar updateQuery={this.updateQuery} newString = {this.state.query}/>
                        {fullList}
                    </div> 
                    : 
                    
                    <div>Sorry mate... No data available =(</div>
                }
            </div>
        )
    }
}
