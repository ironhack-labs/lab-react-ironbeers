import React, {Component} from 'react'

class Field extends Component{
  state = {
    field : '',
    error: true, 
    touch: false
  }
  
  handleBlur = () => this.setState({ touch: true })
  
  handleChange = (e) => {
    const hasError = this.props.validation(e.target.value)
    console.log(hasError)

    const {value} = e.target
    this.setState ({
      field: value,
      error : hasError
    })
    this.props.handleParent(e.target.name, value, hasError)
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