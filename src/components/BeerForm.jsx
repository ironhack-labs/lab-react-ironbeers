import { useFormik } from 'formik';
import { object, string } from 'yup';
import { ClipLoader } from 'react-spinners';

const beerSchema = object({
  name: string().required('Campo requerido'),
  tagline: string().required('Campo requerido'),
  description: string().required('Campo requerido'),
  img: string()
    .required('Campo requerido')
    .url('Formato no válido, tiene que ser una URL'),
});

const INITIAL_VALUES = {
  name: '',
  tagline: '',
  description: '',
  img: '',
};

const BeerForm = ({ onSubmit, initialValues = INITIAL_VALUES }) => {
  const { values, errors, touched, isValid, isSubmitting, setSubmitting, handleChange, handleBlur, handleSubmit, setErrors } = useFormik({
    initialValues: {...initialValues},
    onSubmit: (values) => {
      setSubmitting(true);

      const data = {...values};

      onSubmit(data)
        .catch(error => {
          if (error && error.response && error.response.data && error.response.data.errors) {
            const errors = error.response.data.errors;

            setErrors(errors);
          } else {
            console.error("Error al enviar el formulario:", error);
          }
        });
    },
    validationSchema: beerSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
  });

  return (
    <form onSubmit={handleSubmit} data-bs-theme="light">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
          id="name"
          onChange={handleChange}
          name="name"
          value={values.name}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <div className="invalid-feedback">{errors.name}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Descripción
        </label>
        <textarea
          className={`form-control ${errors.description && touched.description ? 'is-invalid' : ''}`}
          id="description"
          onChange={handleChange}
          name="description"
          value={values.description}
          rows="3"
          onBlur={handleBlur}
        />
        {errors.description && touched.description ? (
          <div className="invalid-feedback">{errors.description}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="tagline" className="form-label">
          Tagline
        </label>
        <input
          className={`form-control ${errors.tagline && touched.tagline ? 'is-invalid' : ''}`}
          id="tagline"
          onChange={handleChange}
          name="tagline"
          value={values.tagline}
          onBlur={handleBlur}
        />
        {errors.tagline && touched.tagline ? (
          <div className="invalid-feedback">{errors.tagline}</div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="img" className="form-label">
          Imagen
        </label>
        <input
          className={`form-control ${errors.img && touched.img ? 'is-invalid' : ''}`}
          id="img"
          onChange={handleChange}
          name="img"
          value={values.img}
          onBlur={handleBlur}
        />
        {errors.img && touched.img ? (
          <div className="invalid-feedback">{errors.img}</div>
        ) : null}
      </div>

      <button disabled={!isValid || isSubmitting} type="submit" className="btn btn-primary">
        {isSubmitting ? <><ClipLoader color="#fff" size={12} /> Creando...</> : 'Enviar'}
      </button>
    </form>
  );
};

export default BeerForm;
