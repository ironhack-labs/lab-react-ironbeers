import { useForm } from "react-hook-form";

function AddBeer({ onSubmitBeer = () => {}, errorMessage }) {
  
  const validations = {
    attenuation_level: {
      min: { value: 1, message: 'Debe ser mayor que 0' },
      max: { value: 100, message: 'Debe ser menor que 100' }
    },
  };

  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid }, 
    reset 
  } = useForm({ mode: 'all' });

  const handleSubmitForm = async (data) => {
    reset();
    onSubmitBeer(data);
  };

  return (
    <>
      { errorMessage && 
        (<div className="alert alert-danger" role="alert">
          { errorMessage }
        </div> )}

      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="Beer Name"
            {...register('name')}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="Beer Tagline"
            {...register('tagline')}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            placeholder="Description"
            rows="3"
            {...register('description')}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="Image URL"
            {...register('image_url')}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="Date - MM/YYYY"
            {...register('first_brewed')}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="..."
            {...register('brewers_tips')} 
          />

          <label>Attenuation Level</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                %
              </span>
            </div>
            <input
              className={`form-control mb-4 ${errors.attenuation_level ? 'is-invalid' : ''}`}
              type="number"
              {...register('attenuation_level', validations.attenuation_level)}
              min={0}
              max={100}
            />
            {errors.attenuation_level && (
              <div className="invalid-feedback"> {
                errors.attenuation_level.message
              }</div>)}
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            placeholder="Contributed by"
            {...register('contributed_by')}
          />
          <button  type='submit' className="btn btn-primary btn-round" disabled={!isValid} >Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeer;
