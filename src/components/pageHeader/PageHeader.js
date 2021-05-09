import React from 'react';

class PageHeader extends React.Component {
    
    render() {
        return(
            <div>
            <img src={this.props.image} alt={this.props.title}/>
            <h1 className="title">{this.props.title}</h1>
            <p>{this.props.description}</p>
            </div>
        )
    }
}

export default PageHeader;