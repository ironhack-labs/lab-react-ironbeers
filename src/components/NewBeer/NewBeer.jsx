import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createBeer } from '../../baseService/baseService';

const NewBeer = () => {

  validators = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } 
    else if(!values.tagline){
        errors.tagline = 'Required';
    }
    else if(!values.description){
        errors.description = 'Required';
    }
    else if(!values.first_brewed){
        errors.first_brewed = 'Required';
    }
    else if(!values.brewers_tips){
        errors.brewers_tips = 'Required';
    }
    else if(!values.attenuation_level){
        errors.attenuation_level = 'Required';
    }
    else if(!values.contributed_by){
        errors.contributed_by = 'Required';
    }

    return errors;
  }

  return (
      <div className="NewBeer">
          <h1>new</h1>
      </div>
  )
}

export default NewBeer


const NewBeer = () => {

    
    return (
        <div className="form__container">
            <h1>New Beer</h1>
            <Formik
                initialValues={{ 
                    name: '', 
                    tagline: '',
                    description: '',
                    first_brewed: '',
                    brewers_tips: '',
                    attenuation_level: '',
                    contributed_by: ''
                }}

                validate={validators}

                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);

                    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', values)
                    .then( response => {
                        console.log('Beer added')
                    })
                    .catch( error => console.log(error))

                }}
                >

                {({ isSubmitting }) => (
                    <div className="container">
                        <div className="row justify-content-center m-5">

                            <Form>
                                <div className="row m-1">
                                    <div className="col">
                                        <Field type="string" name="name"  >
                                        { ({ 
                                            field, 
                                            meta: { touched, error } 
                                            }) => <Field className={ touched && error ? "input__invalid" : "" } placeholder="Name" { ...field } />
                                        }
                                        </Field>

                                        <ErrorMessage name="name" component="div" className="error__message"/>
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col">
                                        <Field type="string" name="tagline" placeholder="tagline">
                                        { ({ 
                                            field, 
                                            meta: { touched, error } 
                                            }) => <Field className={ touched && error ? "input__invalid" : "" } placeholder="tagline" { ...field } />
                                        }
                                        </Field>
                                        <ErrorMessage name="tagline" component="div" className="error__message"/>
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col">
                                        <Field type="string" name="description" placeholder="description">
                                        { ({ 
                                            field, 
                                            meta: { touched, error } 
                                            }) => <textarea className={ touched && error ? "input__invalid" : "textArea__style" } placeholder="description" { ...field } />
                                        }
                                        </Field>
                                        <ErrorMessage name="description" component="div" className="error__message"/>
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col">
                                        <Field name="first_brewed" placeholder="first brewed">
                                        { ({ 
                                            field, 
                                            meta: { touched, error } 
                                            }) => <Field className={ touched && error ? "input__invalid" : "dateInput__style" } type="date" placeholder="First brewed" { ...field } />
                                        }
                                        </Field>
                                        <ErrorMessage name="first_brewed" component="div" className="error__message"/>
                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col">
                                        <Field type="string" name="brewers_tips" placeholder="brewers tips">
                                        { ({ 
                                            field, 
                                            meta: { touched, error } 
                                            }) => <Field className={ touched && error ? "input__invalid" : "" } placeholder="Brewers tips" { ...field } />
                                        }
                                        </Field>
                                        <ErrorMessage name="brewers_tips" component="div" className="error__message"/>
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col">
                                        <Field type="number" name="attenuation_level" placeholder="attenuation level"/>
                                        <ErrorMessage name="attenuation_level" component="div" className="error__message"/>
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col">
                                        <Field type="string" name="contributed_by" placeholder="contributed by" >
                                        { ({ 
                                            field, 
                                            meta: { touched, error } 
                                            }) => <Field className={ touched && error ? "input__invalid" : "" } placeholder="Contributed by" { ...field } />
                                        }
                                        </Field>
                                        <ErrorMessage name="contributed_by" component="div" className="error__message"/> 
                                    </div>
                                </div>
                                <div className="row m-2">
                                    <div className="col">
                                        <button type="submit" disabled={isSubmitting}  className="btn btn-secondary">Submit</button>
                                    </div>
                                </div>
                            </Form>

                        </div>
                    </div>
                )}

            </Formik>

        </div>
    );
};

export default NewBeer;
