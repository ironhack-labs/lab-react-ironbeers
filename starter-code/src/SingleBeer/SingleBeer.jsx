import React from 'react';


class SingleBeer extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.image_url} alt="beer-img" />
                    <h3>{this.props.name}</h3>
                    <p>{this.props.tagline}</p>
                    <p>Created by: {this.props.contributed_by}</p>
                    <hr/>>
                </div>
            </div>
        )
    }
}

export default SingleBeer;