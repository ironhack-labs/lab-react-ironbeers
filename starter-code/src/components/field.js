import React, {Component} from 'react'

class Field extends Component{
  state = {
    field : '',
    error: true, 
    touch: false
  }
  
  handleBlur = () => this.setState({ touch: true })
  
  handleChange = (e) => {
    const validate = this.props.validation(e.target.value)
    const {value} = e.target
    this.setState ({
      field: value,
      error : validate
    })
    this.props.handleParent(e.target.name, value, validate)
  }

  render (){
    // console.log(this.state)
    return (
    <div className="form-group">
        <label>{this.props.label}</label>
        <input type="text" className="form-control"
          name={this.props.name}
          autoComplete="off"
          value={this.state.field}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {this.state.touch && this.state.error && (
          <div className="">
            Invalid field
          </div>
        )}
      </div> 
    )
  }
}

export default Field