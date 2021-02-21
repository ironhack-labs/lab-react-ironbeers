import React from 'react';

function NewBeer() {

    return (
        <div>
            <h1>Create new beer</h1>
            <form>
                <div className="form-group">

                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <input type="text"  className="form-control"/>
                        </div>
                        <div className="col">
                            <label htmlFor="tagline">Tagline</label>
                            <input type="text"  className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col">
                            <label htmlFor="first-brewed">First brewed</label>
                            <input type="text"  className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="brewer_tips">Brewer tips</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col">
                            <label htmlFor="attenuation_level">Attenuation level</label>
                            <input type="number"  className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="contributed_by">Contributed by</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col">
                            <button class="btn btn-primary">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
export default NewBeer;