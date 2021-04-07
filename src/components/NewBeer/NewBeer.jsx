
import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import { createBeer } from '../../baseService/baseService';

const notify = (value) => toast( value + ' beer created!');

const beerSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    tagline: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    first_brewed: Yup.string().required('Required'),
    brewers_tips: Yup.string().required('Required'),
    attenuation_level: Yup.number().positive('Are you sure?').required('Required'),
    contributed_by: Yup.string().required('Required'),
});

const NewBeer = () => {
  return (
    <div className="container mb-4 pt-5">
      <h1 className="mb-3 text-center">Create new beer</h1>

        <Formik
            initialValues={{
                name: '',
                tagline: '',
                description: '',
                first_brewed: '',
                brewers_tips: '',
                attenuation_level: '',
                contributed_by: '',
            }}
            validationSchema={ beerSchema }
            onSubmit={
              async (values) => {
                try { await createBeer(values) 
                  notify(values.name)
                } catch(err) {
                  notify('There was an error. Not ')
                }
              }
            }
        >

          {({ errors, touched }) => (
              <Form>
                  <div className="mb-3">
                      <label htmlFor="name" className="form-label">Beer Name</label>
                      <Field name="name" id="name" className="form-control" />
                      { errors.name && touched.name && <small className="text-danger">{errors.name}</small> }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="tagline" className="form-label">Tagline</label>
                      <Field name="tagline" id="tagline" className="form-control" />
                      { errors.tagline && touched.tagline && <small className="text-danger">{errors.tagline}</small> }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="description" className="form-label">Description</label>
                      <Field as="textarea" name="description" id="description" className="form-control" />
                      { errors.description && touched.description && <small className="text-danger">{errors.description}</small> }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="first_brewed" className="form-label">First brewed</label>
                      <Field name="first_brewed" id="first_brewed" className="form-control" />
                      { errors.first_brewed && touched.first_brewed && <small className="text-danger">{errors.first_brewed}</small> }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="brewers_tips" className="form-label">Brewers tips</label>
                      <Field name="brewers_tips" id="brewers_tips" className="form-control" />
                      { errors.brewers_tips && touched.brewers_tips && <small className="text-danger">{errors.brewers_tips}</small> }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="attenuation_level" className="form-label">Attenuation level</label>
                      <Field name="attenuation_level" id="attenuation_level" className="form-control" />
                      { errors.attenuation_level && touched.attenuation_level && <small className="text-danger">{errors.attenuation_level}</small> }
                  </div>
                  <div className="mb-3">
                      <label htmlFor="contributed_by" className="form-label">Contributed by</label>
                      <Field name="contributed_by" id="contributed_by" className="form-control" />
                      { errors.contributed_by && touched.contributed_by && <small className="text-danger">{errors.contributed_by}</small> }
                  </div>
                  <button type="submit" className="btn btn-dark mt-3">Create your beer!</button>
              </Form>
          )}

        </Formik>

        <Toaster />
      </div>
  )
}

export default NewBeer