import React from 'react';
import "./styles.css";
import Header from '../Header';
import Input from '../Input';

class NewBeer extends React.Component {

    state = {
        search: ''
      }

    handleInput = (e) => {
        this.setState({
          search: e.target.value
        })
    }

    render(){
        return (
            <div>
                <Header />
                <Input title='Name' style="form" name="search" type="text" value={this.state.search} action={this.handleInput}/>
                <Input title='Tagline' style="form" name="search" type="text" value={this.state.search} action={this.handleInput}/>
                <Input title='Description' style="form formDescription" name="search" type="text" value={this.state.search} action={this.handleInput}/>
                <Input title='First Brewed' style="form" name="search" type="text" value={this.state.search} action={this.handleInput}/>
                <Input title='Brewers Tips' style="form" name="search" type="text" value={this.state.search} action={this.handleInput}/>
                <Input title='Attenuation Level' style="form" name="search" type="text" value={this.state.search} action={this.handleInput}/>
                <Input title='Contributed By' style="form" name="search" type="text" value={this.state.search} action={this.handleInput}/>
                <button className="buttonNew"> Add new  </button>
            </div>
        )
    }
}

export default NewBeer;