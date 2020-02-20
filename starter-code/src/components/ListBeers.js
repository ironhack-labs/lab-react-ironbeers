import React, { Component } from 'react'
import {getAll} from '../services/index'
import {Link} from 'react-router-dom'


export default class Home extends Component {
    state = {
        data: []
    }

    getData = async () => {
        const data = await getAll()
        this.setState({data})
    }

    componentDidMount = async() => {
        await this.getData()
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                {this.state.data.map((el, index) => (
                    <div key={index}>
                        <img src={el.image_url} style={{width: '10%'}} alt="chela"/>
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <Link to={`/${el._id}`}>See more info</Link>
                    </div>
                ))}
            </div>
        )
    }
}
