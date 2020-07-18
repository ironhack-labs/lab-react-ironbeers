import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class AllBeers extends React.Component {
    state = {
        data: null,
        query: ''
      }
    
    handleInputChange = event => {
        const search = event.target.value
        this.setState(state => ({
            query: search
        }))
    }

    searchBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/search?q=' + this.state.query)
        .then(response => {
            const beers = response.data;
            this.setState({
                data: beers
            })
        }) 
    }

    getBeers = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                const beers = response.data;
                this.setState({
                    data: beers
                })
            })
    }

    componentDidMount() {
        this.getBeers();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.query !== prevState.query) {
            this.searchBeers()
        }
    }
  render() {
    const beers = this.state.data
    if (!beers) return <></>;
    return (
        <div className="container">
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search" 
                    aria-label="Search" 
                    aria-describedby="addon-wrapping"
                    name="query" 
                    value={this.state.query} 
                    onChange={this.handleInputChange}
                />
            </div>
            <br />
            <ul className="media-list">
                {beers.map(beer => {
                    return (
                        <li key={beer._id} className="media" style={{ height: '300px'}}>
                            <div className="media-left" style={{ width: '400px'}}>
                            <Link to={`/beers/${beer._id}`}>
                                    <img className="media-object" style={{ height: '200px'}} src={beer.image_url} alt="..." />
                                </Link>    
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">{ beer.name }</h4>
                                <p>{ beer.tagline }</p>
                                <p><strong>Created by: </strong> { beer.contributed_by }</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

  }
}

export default AllBeers;