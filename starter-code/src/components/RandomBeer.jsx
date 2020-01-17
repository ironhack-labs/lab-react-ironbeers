import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class RandomBeer extends Component {

    /* the props will give us a getBeer method to get a beer to show */
    constructor(props){
        super(props);
        this.state={beer:this.props.getBeer()};
    }

    render() {
        if(!this.state.hasOwnProperty("beer"))
            return <h1>No beer!</h1>
        console.log("Random beer",this.state.beer);
        return (<div>
            <div className='App-link-home'><Link to='/'>Home</Link></div>
            <div>
            <table>
                    <thead>
                        <tr>
                            <th align='right'>Property</th>
                            <th align='left'>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align='right'>Name:</td>
                            <td align='left'>{this.state.beer.name}</td>
                        </tr>
                        <tr>
                            <td align='right'>Tagline:</td>
                            <td align='left'>{this.state.beer.tagline}</td>
                        </tr>
                        <tr>
                            <td align='right'>First brewed:</td>
                            <td align='left'>{this.state.beer.first_brewed}</td>
                        </tr>
                        <tr>
                            <td align='right'>Attenuation level:</td>
                            <td align='left'>{this.state.beer.attenuation_level}</td>
                        </tr>
                        <tr>
                            <td align='right'>Description:</td>
                            <td align='left'>{this.state.beer.description}</td>
                        </tr>
                        <tr>
                            <td align='right'>Contributed by:</td>
                            <td align='left'>{this.state.beer.contributed_by}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>);
    }

}

export default RandomBeer;
