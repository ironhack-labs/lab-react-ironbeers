import React, { Component } from 'react';

class BeerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tagline: "",
            description: "",
            first_brewed: "",
            brewers_tips: "",
            attenuation_level: "",
            contributed_by: "",
        }
    }

    handleOnChange = (event) => {
        const object = {};
        object[event.target.id] = event.target.value
        this.setState(object)
    }

    handleCreate = (event) => {
        event.preventDefault()
        this.props.createNew(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleCreate}>
                    <label className="form-label">Name</label>
                    <input
                        className="form-field"
                        type="text"
                        id="name"
                        onChange={(e) => this.handleOnChange(e)}
                    />
                    <label className="form-label">Tagline</label>
                    <input
                        className="form-field"
                        type="text"
                        id="tagline"
                        onChange={(e) => this.handleOnChange(e)}
                    />
                    <label className="form-label">Description</label>
                    <input
                        className="form-field"
                        type="text"
                        id="description"
                        onChange={(e) => this.handleOnChange(e)}
                    />
                    <label className="form-label">First Brewed</label>
                    <input
                        className="form-field"
                        type="text"
                        id="first_brewed"
                        onChange={(e) => this.handleOnChange(e)}
                    />
                    <label className="form-label">Brewer's Tips</label>
                    <input
                        className="form-field"
                        type="text"
                        id="brewers_tips"
                        onChange={(e) => this.handleOnChange(e)}
                    />
                    <label className="form-label">Attenuation Level</label>
                    <input
                        className="form-field"
                        type="number"
                        id="attenuation_level"
                        onChange={(e) => this.handleOnChange(e)}
                    />
                    <label className="form-label">Contributed By</label>
                    <input
                        className="form-field"
                        type="text"
                        id="contributed_by"
                        onChange={(e) => this.handleOnChange(e)}
                    />
                    <button type="submit">ADD NEW</button>
                </form>
            </div>
        );
    }
}

export default BeerForm;