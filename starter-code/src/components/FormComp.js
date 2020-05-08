import React from 'react';

const FormComp = ( {handleSubmit} ) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group ">
      <label htmlFor ="name">Name</label>
      <input type="text" className="form-control" id="name" name="name" />
    </div>

    <div className="form-group ">
      <label htmlFor ="tagline">Tagline</label>
      <input type="text" className="form-control" id="tagline" name="tagline" />
    </div>

    <div className="form-group">
      <label htmlFor ="description">Description</label>
      <textarea className="form-control" id="description" name="description" rows="3" />
    </div>

    <div className="form-group ">
      <label htmlFor ="first_brewed">First brewed</label>
      <input type="text" className="form-control" id="first_brewed" name="first_brewed" />
    </div>

    <div className="form-group ">
      <label htmlFor ="brewers_tips">Brewers Tips</label>
      <input type="text" className="form-control" id="brewers_tips" name="brewers_tips" />
    </div>
    <div className="form-group ">
      <label htmlFor ="attenuation_level ">Attenuation Level </label>
      <input type="number" className="form-control" id="attenuation_level " name="attenuation_level " />
    </div>

    <div className="form-group ">
      <label htmlFor ="contributed_by">Contributed By</label>
      <input type="text" className="form-control" id="contributed_by" name="contributed_by" />
    </div>
    <br />

    <input className="btn btn-primary" type="submit" value="ADD NEW"></input>

  </form>
);

export default FormComp;
