import React, { Component } from 'react'
import './Search.css';

export default class Search extends Component {
        state = { value: '' }
        onChange = (event) => {
                this.setState({value: event.target.value});
                this.props.onChange(event.target.value)
        }
        render() {
                return (
                        <div className='search'>
                                <input
                                        name='search'
                                        value={this.state.value}
                                        onChange={this.onChange}
                                        placeholder="Search"
                                />
                        </div>
                )
        }
}
