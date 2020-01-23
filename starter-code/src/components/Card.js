import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img id='image' src={this.props.image} alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p className="title is-4"> {this.props.title}</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Phasellus nec iaculis mauris.</span>
                    </div>
                </div>
            </div>





        )
    }
}

export default Card;