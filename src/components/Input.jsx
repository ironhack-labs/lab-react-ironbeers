import React from 'react';

const Input = ({ name, value , error, onChange}) => {
    return (
        <div className="form-group pt-2 ml-5 mr-5 text-left">

                <label htmlFor={ name } className="ml-3 mb-0 text-capitalize font-weight-bold">
                    { name.replace(/([a-z](?=[A-Z]))/g, '$1 ')}
                </label>
                
                { name === "description" ? 
                    <textarea
                        rows="10"
                        className="form-control form-rounded border border-gray"
                        style={{borderRadius: '2rem'}}
                        name={ name }
                        value={ value }
                        onChange={onChange}
                    ></textarea>
                    :
                    <input 
                        className="form-control form-rounded border border-gray"
                        style={{borderRadius: '2rem'}}
                        type={ name === "attenuation_level" ? "number" : "text"}
                        name={ name }
                        value={ value }
                        onChange={onChange}
                    />
               }
                
                <div className="invalid-feedback">Please provide your </div>
            </div>
    )
    
}

export default Input;