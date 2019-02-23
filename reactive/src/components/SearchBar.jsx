import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            search: ""
        }
    }

    textFormHandler = (e) => {
        console.log(e.target.value)

        let newState = {
            ...this.state,
            search: e.target.value
          };

    this.props.handlerFunction(newState.search);

    this.setState(newState);
    }


  render() {
    return (
      <div>
        <div className="row align-items-center">
        <div className="col">
          <input className="form-control mt-3 mb-3"
            onChange={e => this.textFormHandler (e)}
            type="text"
            name="search"
            placeholder="Search..."
          />
          </div>
        </div>
      </div>
    )
  }
}
