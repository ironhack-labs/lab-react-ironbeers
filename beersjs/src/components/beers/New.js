import React, { Component } from 'react'
import { New } from '../services/beersApi';

class NewB extends Component {
    state = {
        beer: {}
    }

    handleSubmit = (e) => {
        const { beer } = this.state
        e.preventDefault()
        New(beer)
            .then(addedBeer => {
                this.props.history.push('/beers')
            }).catch(err => console.log(err))
    }

    handleInput = (e) => {
        const { beer } = this.state
        beer[e.target.name] = e.target.value
        this.setState({ beer })
    }
    render() {
        const { handleSubmit, handleInput } = this
        return (
            <div className="page-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre:
                        <input onChange={handleInput} type="text" name="name" className="form-control" /></label>
                    </div>
                    <div>
                        <label>Tag:
                        <input onChange={handleInput} type="text" name="tagline" className="form-control" /></label>
                    </div>
                    <div>
                        <label>Descripción:
                        <input onChange={handleInput} type="text" name="description" className="form-control" /></label>
                    </div>
                    <div>
                        <label>Primer brew
                        <input onChange={handleInput} type="text" name="first_brewed" className="form-control" /></label>
                    </div>
                    <div>
                        <label>Tips del Brewmaster
                        <input onChange={handleInput} type="text" name="brewers_tips" className="form-control" /></label>
                    </div>
                    <div>
                        <label>Nivel:
                        <input onChange={handleInput} type="number" name="attenuation_level" className="form-control" /></label>
                    </div>
                    <div>
                        <label>Por:
                        <input onChange={handleInput} type="text" name="contributed_by" className="form-control" /></label>
                    </div>
                    <div>
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default NewB