import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { newBeer } from "../../services/beersApi";

class New extends Component {
    state = {
        beer: {}
    }
    handleChange = (e) => {
        const { beer } = this.state
        const field = e.target.name
        beer[field] = e.target.value
        this.setState({ beer })
    }
    createBeer = (e) => {
        e.preventDefault()
        const { beer } = this.state
        console.log(beer)
        newBeer(beer)
            .then(r => console.log(r))
            .catch(e => console.log(e))
    }
    render() {
        const { handleChange, createBeer } = this
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Link to='/'>
                    <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="other" width='100%' style={{
                        maxHeight: '100px'
                    }} />
                </Link>
                <form onSubmit={createBeer} style={{
                    width: '80%',
                    maxWidth: '500px',
                    margin:'10px'
                }}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" name="name" onChange={handleChange} className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tagline</label>
                        <input type="text" name="tagline" onChange={handleChange} className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Tagline" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <input type="text" name="description" onChange={handleChange} className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">First Brewed</label>
                        <input type="text" name="first_brewed" onChange={handleChange} className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="First Brewed" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Brewers Tips</label>
                        <input type="text" name="brewers_tips" onChange={handleChange} className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Brewers Tips" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Attenuation Level</label>
                        <input type="text" name="attenuation_level" onChange={handleChange} className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Attenuation Level" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Contributed by</label>
                        <input type="text" name="contributed_by" onChange={handleChange} className="form-control"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Contributed by" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default New








