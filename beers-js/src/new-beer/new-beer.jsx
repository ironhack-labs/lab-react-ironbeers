import React, {Component} from 'react';
import Header from '../header/header';

export default class NewBeer extends Component{
    render(){
        return(
            <div className="NewBeer">
                <Header/>
                <h2>New Beer</h2>
            </div>
        )
    }
}