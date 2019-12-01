import React, { Component } from 'react'

export default class Search extends Component {
                 handleChange = event => {
                   this.props.setQuery(event.target.value);
                 };

                 render() {
                   return (
                     <div>
                       <input
                         className="form-control"
                         placeholder="Search Beer"
                         type="text"
                         name="query"
                         value={this.props.query}
                         onChange={this.handleChange}
                       />
                     </div>
                   );
                 }
               }
