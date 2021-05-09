import React from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends React.Component {
    
    render() {
        return(
            <div>
            <header><Link className="is-size-3" to="/" >&#8962;</Link></header>
            <img src={this.props.image} alt={this.props.title}/>
            <h1 className="title">{this.props.title}</h1>
            <p>{this.props.description}</p>
            </div>
        )
    }
}

export default PageHeader;