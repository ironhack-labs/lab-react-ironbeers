import React, { useState } from 'react'

const validations = {
  name: (value) => {
    let message
    if (!value) {
      message = "Name is required"
    }
    return message
  },
  tagline: (value) => {
    let message
    if (!value) {
      message = "Tagline is required"
    }
    return message
  },
  description: (value) => {
    let message
    if (!value) {
      message = "Description is required"
    }
    return message
  },
  first_brewed: (value) => {
    let message
    if (!value) {
      message = "First brewed is required"
    }
    return message
  },
  brewed_tips: (value) => {
    let message
    if (!value) {
      message = "Brewed tips is required"
    }
    return message
  },
  attenuation_level: (value) => {
    let message
    if (!value) {
      message = "Attenuation level is required"
    }
    return message
  },
  contributed_by: (value) => {
    let message
    if (!value) {
      message = "Contributed by is required"
    }
    return message
  }
}

const initialState = {
  beer: {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewed_tips: "",
    attenuation_level: "",
    contributed_by: ""
  },
  errors: {
    name: validations.name(""),
    tagline: validations.tagline(""),
    description: validations.description(""),
    first_brewed: validations.first_brewed(""),
    brewed_tips: validations.brewed_tips(""),
    attenuation_level: validations.attenuation_level(""),
    contributed_by: validations.contributed_by("")
  },
  touch: {
    name: false,
    tagline: false,
    description: false,
    first_brewed: false,
    brewed_tips: false,
    attenuation_level: false,
    contributed_by: false
  }
}

function NewBeerForm({ className, onCreateBeer}) {
  const [state, setState] = useState(initialState)

  const handleChange = (b) => {
    const { name, value } = b.target
    setState((state) => ({
      ...state,
      beer: {
        ...state.beer,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: validations[name] && validations[name](value)
      }      
    }))
  }

  const handleBlur = (b) => {
    const { name } = b.target
    setState((state) => ({
      ...state,
      touch: {
        ...state.touch,
        [name]: true
      }
    }))
  }

  const isValid = () => !Object.keys(state.errors).some(error => state.errors[error])

  const handleSubmit = (b) => {
    b.preventDefault()
    if (isValid()) {
      onCreateBeer({...beer})
      setState(initialState)
    }
  }

  const { beer, errors, touch } = state

  return (
    <div className='container my-5'>
      <form className={className} onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className={`fa fa-fw fa-beer ${touch.name && errors.name && "text-danger fa-spin"} ${touch.name && !errors.name && "text-success"} `}></i>
          </span>
          <input
            type="text"
            className={`form-control ${touch.name && errors.name ? "is-invalid" : ""}`}
            placeholder="Beer name"
            name="name"
            value={beer.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touch.name && errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className={`fa fa-fw fa-tag ${touch.tagline && errors.tagline && "text-danger fa-spin"} ${touch.tagline && !errors.tagline && "text-success"} `}></i>
          </span>
          <input
            type="text"
            className={`form-control ${touch.tagline && errors.tagline ? "is-invalid" : ""}`}
            placeholder="Tag"
            name="tagline"
            value={beer.tagline}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touch.tagline && errors.tagline && (<div className="invalid-feedback">{errors.tagline}</div>)}
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className={`fa fa-fw fa-bars ${touch.description && errors.description && "text-danger fa-spin"} ${touch.description && !errors.description && "text-success"} `}></i>
          </span>
          <input
            type="text"
            className={`form-control ${touch.description && errors.description ? "is-invalid" : ""}`}
            placeholder="Beer description"
            name="description"
            value={beer.description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touch.description && errors.description && (<div className="invalid-feedback">{errors.description}</div>)}
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className={`fa fa-fw fa-calendar ${touch.first_brewed && errors.first_brewed && "text-danger fa-spin"} ${touch.first_brewed && !errors.first_brewed && "text-success"} `}></i>
          </span>
          <input
            type="text"
            className={`form-control ${touch.first_brewed && errors.first_brewed ? "is-invalid" : ""}`}
            placeholder="First brewed date MM/YYYY"
            name="first_brewed"
            value={beer.first_brewed}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touch.first_brewed && errors.first_brewed && (<div className="invalid-feedback">{errors.first_brewed}</div>)}
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className={`fa fa-fw fa-cutlery ${touch.brewed_tips && errors.brewed_tips && "text-danger fa-spin"} ${touch.brewed_tips && !errors.brewed_tips && "text-success"} `}></i>
          </span>
          <input
            type="text"
            className={`form-control ${touch.brewed_tips && errors.brewed_tips ? "is-invalid" : ""}`}
            placeholder="Brewed tips"
            name="brewed_tips"
            value={beer.brewed_tips}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touch.brewed_tips && errors.brewed_tips && (<div className="invalid-feedback">{errors.brewed_tips}</div>)}
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className={`fa fa-fw fa-bus ${touch.attenuation_level && errors.attenuation_level && "text-danger fa-spin"} ${touch.attenuation_level && !errors.attenuation_level && "text-success"} `}></i>
          </span>
          <input
            type="number"
            className={`form-control ${touch.attenuation_level && errors.attenuation_level ? "is-invalid" : ""}`}
            placeholder="Attenuation level"
            name="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touch.attenuation_level && errors.attenuation_level && (<div className="invalid-feedback">{errors.attenuation_level}</div>)}
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className={`fa fa-fw fa-user ${touch.contributed_by && errors.contributed_by && "text-danger fa-spin"} ${touch.contributed_by && !errors.contributed_by && "text-success"} `}></i>
          </span>
          <input
            type="text"
            className={`form-control ${touch.contributed_by && errors.contributed_by ? "is-invalid" : ""}`}
            placeholder="Contributed by"
            name="contributed_by"
            value={beer.contributed_by}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button className='btn btn-outline-secondary' type='submit' disabled={!isValid()}>Create beer</button>
          {touch.contributed_by && errors.contributed_by && (<div className="invalid-feedback">{errors.contributed_by}</div>)}
        </div>
      </form>
    </div>
  )
}

NewBeerForm.defaultProps = {
  className: ""
}

export default NewBeerForm