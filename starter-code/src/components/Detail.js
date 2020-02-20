import React, { Component } from 'react'
import { getBeer } from '../services'

export default class Detail extends Component {
    state = {
        name: '',
        img: '',
        desc: ''
    }

    getData = async () => {
        let beer = await getBeer(this.props.match.params.id)
        this.setState({name: beer.name, img: beer.image_url, desc: beer.description})
    }

    render() {
        this.getData()

        return (
            <div>
                <img src={this.state.img} style={{width: '10%'}} alt="chela"/>
                <h3>{this.state.name}</h3>
                <p>{this.state.desc}</p>
            </div>
        )
    }
}
