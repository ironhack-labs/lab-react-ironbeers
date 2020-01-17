import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class AllBeers extends Component {

    constructor(props){
        super(props);
        this.state={
            beers:this.props.getBeers()
        };
    }

    /* let's assume the props contain all the beer information */
    render() {
        return(<div>
            <div className='App-link-home'><Link to='/'>Home</Link></div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Tagline</th>
                            <th>Contributed by</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.beers.map((beer)=>
                                <tr>
                                    <td>{beer.name}</td>
                                    <td>{beer.image_url}</td>
                                    <td>{beer.tagline}</td>
                                    <td>{beer.contributed_by}</td>
                                    <td><Link to={"/beer/"+beer.key}>Details</Link></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>);
    }
}

export default AllBeers;
