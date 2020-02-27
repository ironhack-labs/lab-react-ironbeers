import React, { Component } from 'react'
import Nav from './Nav';

export default class Beer extends React.Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <div>
                    <img src={this.props.image_url} alt={this.props.name}/>
                    <h1>{this.props.name}</h1>
                    <h2>{this.props.tagline}</h2>
                    <p>{this.props.description}</p>
                    <p>Created by: {this.props.contributed_by}</p>
                </div>
            </div>
        ) 
    }
}