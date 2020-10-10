import React from 'react'
import axios from 'axios'

class NewBeer extends React.Component {

  state = {
    data: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: "",
    }
  }

    handleChange = (event) => {
      const { name, value } = event.target;
  
      this.setState({
        data: {...this.state.data, [name]: value}
      });
    };
    handleSubmit(event) {
      const data = this.state

      event.preventDefault()
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
          name: data.name,
          tagline: data.tagline,
          description: data.description,
          first_brewed: data.first_brewed,
          brewers_tips: data.brewers_tips,
          attenuation_level: data.attenuation_level,
          contributed_by: data.contributed_by,
          image_url:data.image_url
      })
  }

  render() {
    const data = this.state
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="form-group">
              <label className="align-text-left" htmlFor="name">Name</label>
              <input name="name"
                value={data.name}
                className="form-control"
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Tagline</label>
              <input name="tagline"
                value={data.tagline}
                type="text"
                className="form-control"
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Description</label>
              <textarea name="desciption"
                rows="3"
                value={data.description}
                className="form-control"
                onChange={this.handleChange}
                ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="name">First Brewed</label>
              <input name="first_brewed"
                type="text"
                value={data.first_brewed}
                className="form-control"
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Brewers Tips</label>
              <input name="brewers_tips"
                type="text"
                value={data.brewers_tips}
                className="form-control"
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Attenuation Level</label>
              <input name="attenuation_level"
                value={data.attenuation_level}
                type="number"
                className="form-control"
                onChange={this.handleChange}

              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Contributed By</label>
              <input name="contributed_by"
                value={data.contributed_by}
                type="text"
                className="form-control"
                onChange={this.handleChange}

              />
            </div>
            <div className="form">
              <button className="btn btn-primary btn-lg btn-block" type="submit">Add a new beer</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default NewBeer