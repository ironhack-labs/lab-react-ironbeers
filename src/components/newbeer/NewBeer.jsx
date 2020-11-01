import React from 'react'

export default function newBeer() {
    return (
        <div>
    
            <form>
                <div className="htmlForm-group">
                    <label className ='font-weight-bold' htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" ></input>
                </div>
                <div className="htmlForm-group">
                    <label className ='font-weight-bold' htmlFor="tagline">Tagline</label>
                    <input type="text" className="form-control" id="tagline" ></input>
                </div>
                <div className="htmlForm-group">
                    <label className ='font-weight-bold' htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" ></input>
                </div>
                <div className="htmlForm-group">
                    <label className ='font-weight-bold' htmlFor="first_brewed">First brewed</label>
                    <input type="text" className="form-control" id="first_brewed" ></input>
                </div>
                <div className="htmlForm-group">
                    <label className ='font-weight-bold' htmlFor="brewers_tips">Brewers tips</label>
                    <input type="text" className="form-control" id="brewers_tips" ></input>
                </div>
                <div className="htmlForm-group">
                    <label className ='font-weight-bold' htmlFor="attenuation_level">Attenuation level</label>
                    <input type="number" className="form-control" id="attenuation_level" ></input>
                </div>
                <div className="htmlForm-group">
                    <label className ='font-weight-bold' htmlFor="contributed_by">Contributed by</label>
                    <input type="text" className="form-control" id="contributed_by" ></input>
                </div>
                <button type="submit" className="btn btn-primary">Add New</button>
            </form>
        
        </div>
    )
}
