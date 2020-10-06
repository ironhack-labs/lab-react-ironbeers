import React from 'react';

function BeerForm(props){
    const { handleSubmit, handleChange, state} = props;

    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameBeerInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameBeerInput"
            name="name"
            onChange={handleChange}
            value={state.name}/>
        </div>
        <div className="form-group">
          <label htmlFor="taglineInput">Tagline</label>
          <input
            type="text"
            className="form-control"
            id="taglineInput"
            name="tagline"
            onChange={handleChange}
            value={state.tagline}/>
        </div>
        <div className="form-group">
          <label htmlFor="descriptionBeerInput">Description</label>
          <textarea
            className="form-control"
            id="descriptionBeertInput"
            name="description"
            onChange={handleChange}
            value={state.description}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="firstBrewedInput">First Brewed</label>
          <input
            type="text"
            className="form-control"
            id="firstBrewedInput"
            name="firstBrewed"
            onChange={handleChange}
            value={state.firstBrewed}/>
        </div>
        <div className="form-group">
          <label htmlFor="beersTipsInput">Beers Tips</label>
          <input
            type="text"
            className="form-control"
            id="beersTipsInput"
            name="beersTips"
            onChange={handleChange}
            value={state.beersTips}/>
        </div>
        <div className="form-group">
          <label htmlFor="attenuationLevelInput">Attenuation Level</label>
          <input
            type="text"
            className="form-control"
            id="attenuationLevelInput"
            name="attenuationLevel"
            onChange={handleChange}
            value={state.attenuationLevel} />
        </div>
        <div className="form-group">
          <label htmlFor="contributedByInput">Contributed By</label>
          <input
            type="text"
            className="form-control"
            id="contributedByInput"
            name="contributedBy"
            onChange={handleChange}
            value={state.contributedBy} />
        </div>
          <button type="submit" className="btn btn-primary">
            Add New
          </button>
      </form>
    );
}

export default BeerForm;