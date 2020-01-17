import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class SingleBeer extends Component {

    constructor(props){
        super(props);
        // console.log("SingleBeer params",this.props.match.params);
        if(this.props.hasOwnProperty("getBeerById"))
            console.log("Can get the beer!");
        else
            console.log("Can't get the beer!");
        // the getBeerById is in the props, the id in the url
        this.state={
            beer:this.props.getBeerById(this.props.match.params.id)
        }
    }

    render() {
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

export default SingleBeer;
