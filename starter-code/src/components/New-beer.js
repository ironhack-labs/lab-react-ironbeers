import React, { Component } from 'react'
import '../App.css';
import TopBar from './TopBar'
import axios from 'axios'
class Newbeer extends Component {

    state = {
        name: "",
        tag: "",
        desc: "",
        first: "",
        tips: "",
        level: 0,
        contr: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    handleAdd = () => {
        const { name, tag, desc, first, tips, levels, contr } = this.state
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: name,
            tagline: tag,
            description: desc,
            first_brewed: first,
            brewers_tips: tips,
            attenuation_level: levels,
            contributed_by: contr
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className=" main-content">
                    <TopBar />
                    <div className="content-add">

                        <label className="labeladd">Name</label>
                        <input onChange={this.handleChange} name="name" className="inputadd" />


                        <label className="labeladd">Tag Name</label>
                        <input onChange={this.handleChange} name="tag" className="inputadd" />


                        <label className="labeladd"> Description</label>
                        <textarea onChange={this.handleChange} name="desc" rows="6" className="inputadd" />


                        <label className="labeladd"> First brewed</label>
                        <input onChange={this.handleChange} name="first" className="inputadd" />

                        <label className="labeladd"> Brewers tips</label>
                        <input onChange={this.handleChange} name="tips" className="inputadd" />

                        <label className="labeladd"> Attenuation level</label>
                        <input onChange={this.handleChange} name="level" className="inputadd" />

                        <label className="labeladd"> Contributed by</label>
                        <input onChange={this.handleChange} name="contr" className="inputadd" />


                        <button onClick={this.handleAdd}>
                            Add new
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Newbeer