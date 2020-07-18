import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class AllBeers extends React.Component {
    state = {
        data: null
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

  render() {
    const beers = this.state.data
    if (!beers) return <></>;
    return (
        <div className="container">
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