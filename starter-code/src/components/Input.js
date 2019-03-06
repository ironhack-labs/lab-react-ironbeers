import React, {Component} from 'react';

class Input extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      name: "",
      tagline: true,
      first_brewed: false,
      description: "",
      image_url: "",
      brewers_tips: "",
      contributed_by: "",
      attenuation_level: undefined
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="field">
          <div className="control">
            <p>{this.props.name}</p>
            <input className="input is-primary" type="text" placeholder={this.props.name} value={this.state.name} onChange={this.handleChange}/>
          </div>
        </div>
      </div>
        )
  }
}

export default Input