import React, { Component } from 'react'
import Header from "./Header"


export default class NewBeer extends Component {
    render() {


        let formStyle = {
            display: "flex",
            flexDirection: "column",
        }

        let labelStyle = {
            marginTop: "15px",
            marginLeft: "10px",

        }

        let inputStyle = {
            borderRadius: "20px",
            borderWidth: "1px",
            fontSize: "15px",
            height: "25px",
            marginTop: "5px",
        }

        return (
            <div>
                <Header />
                <h1>Create a New Beer</h1>

                <div>
                    <form onSubmit={this.props.onSubmit} style={formStyle}>

                        <label style={labelStyle}>Name</label>
                        <input style={inputStyle} type="text" name="name"></input>

                        <label style={labelStyle}>Tagline</label>
                        <input style={inputStyle} type="text" name="tagline"></input>

                        <label style={labelStyle}>Description</label>
                        <input style={inputStyle} type="text" name="description"></input>

                        <label style={labelStyle}>First brewed</label>
                        <input style={inputStyle} type="text" name="first_brewed"></input>

                        <label style={labelStyle}>Brewers tips</label>
                        <input style={inputStyle} type="text" name="brewers_tips"></input>

                        <label style={labelStyle}>Attenuation level</label>
                        <input style={inputStyle} type="number" name="attenuation_level"></input>                        

                        <label style={labelStyle}>Contributed by </label>
                        <input style={inputStyle} type="text" name="contributed_by"></input>

                        <button type="submit">Add</button>

                    </form>


                </div>

            </div>
        )
    }
}
