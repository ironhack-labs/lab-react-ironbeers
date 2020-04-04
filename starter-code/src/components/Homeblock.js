import React from 'react'

class Homeblock extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <img src={this.props.image} alt=""/>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Homeblock