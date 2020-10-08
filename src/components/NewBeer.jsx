import React from 'react'

class NewBeer extends React.Component {

  state = {
    data: "",
  }


  render() {
    const data = this.state.data
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input name="name" 
              value={data.name} 
              className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Tagline</label>
              <input name="tagline" 
              value={data.tagline} 
              type="text"
              className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Description</label>
              <textarea name="desciption" 
              value={data.description} 
              className="form-control"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="name">First Brewed</label>
              <input name="first_brewed" 
              type="text"
              value={data.first_brewed} 
              className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Brewers Tips</label>
              <input name="brewers_tips"
              type="text" 
              value={data.brewers_tips} 
              className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Attenuation Level</label>
              <input name="attenuation_level" 
              value={data.attenuation_level} 
              type="text"
              className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Contributed By</label>
              <input name="contributed_by" 
              value={data.contributed_by} 
              type="text"
              className="form-control"
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NewBeer