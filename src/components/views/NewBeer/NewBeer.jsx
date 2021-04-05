import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const axios = require('axios');

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

                validate={values => {
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
                }}

                onSubmit={(values, { setSubmitting }) => {
                    console.log(values)
                    setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                    }, 400);

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
                                    <Field type="string" name="name" placeholder="Name"/>
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div className="row m-1">
                                    <Field type="string" name="tagline" placeholder="tagline"/>
                                    <ErrorMessage name="tagline" component="div" />
                                </div>
                                <div className="row m-1">
                                    <Field type="string" name="description" placeholder="description"/>
                                    <ErrorMessage name="description" component="div" />
                                </div>
                                <div className="row m-1">
                                    <Field type="string" name="first_brewed" placeholder="first brewed"/>
                                    <ErrorMessage name="first_brewed" component="div" />
                                </div>
                                <div className="row m-1">
                                    <Field type="string" name="brewers_tips" placeholder="brewers tips"/>
                                    <ErrorMessage name="brewers_tips" component="div" />
                                </div>
                                <div className="row m-1">
                                    <Field type="number" name="attenuation_level" placeholder="attenuation level"/>
                                    <ErrorMessage name="attenuation_level" component="div" />
                                </div>
                                <div className="row m-1">
                                    <Field type="string" name="contributed_by" placeholder="contributed by"/>
                                    <ErrorMessage name="contributed_by" component="div" /> 
                                </div>
                                <div className="row m-2">
                                    <button type="submit" disabled={isSubmitting}>Submit</button>
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