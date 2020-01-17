import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export class NewBeer extends Component {

    constructor(props){
        super(props);
        this.state={beer:{}};
        this._submitNewBeer=this._submitNewBeer.bind(this);
        this._respondToPropertyChange=this._respondToPropertyChange.bind(this);
    }

    /* we'll be showing a form where a new beer can be defined */

    /*
    - **name** - must be type *text*
  - **tagline** - must be type *text*
  - **description** - must be type *text*
  - **first_brewed** - must be type *text*
  - **brewers_tips** - must be type *text*
  - **attenuation_level**  - must be type *number* **!!!**
  - **contributed_by** - must be type *text*
    */
    _respondToPropertyChange(e){
        this.state.beer[e.target.name]=e.target.value;
        console.log("New value of '"+e.target.name+"':'"+e.target.value+"'.");
    }
    _submitNewBeer(){
        this.props.addBeer(this.state.beer);
    }

    render(){
        return(<div>
            <div className='App-link-home'><Link to='/'>Home</Link></div>
            <div className='App-form'>
                <input type='text' placeholder='Name' name='name' onChange={this._respondToPropertyChange}/>
                <input type='text' name='tagline' placeholder='Tag line' onChange={this._respondToPropertyChange}/>
                <input type='text' name='description' placeholder='Description' onChange={this._respondToPropertyChange}/>
                <input type='text' name='first_brewed' placeholder='First brewed' onChange={this._respondToPropertyChange}/>
                <input type='text' name='brewers_tips' placeholder='Brewers tips' onChange={this._respondToPropertyChange}/>
                <input type='number' name='attenuation_level' placeholder='Attenuation level' onChange={this._respondToPropertyChange}/>
                <input type='text' name='contributed_by' placeholder='Contributed by' onChange={this._respondToPropertyChange}/>
                <button onClick={this._submitNewBeer}>Submit</button>
            </div>
        </div>)
    }

}

export default NewBeer;
