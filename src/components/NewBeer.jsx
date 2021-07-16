import React, { Component } from 'react'

class NewBeer extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onAdd}>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" name="name"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Tagline</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" name="tagline"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Description</label>
                    <div class="col-sm-10">
                    <textarea type="text" class="form-control" name="description"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">First Brewed</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" name="first_brewed"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Brewer Tips</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" name="brewer_tips"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Attenuation Level</label>
                    <div class="col-sm-10">
                    <input type="number" class="form-control" name="attenuation_level"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">Contributed By</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" name="contributed_by"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewBeer;
