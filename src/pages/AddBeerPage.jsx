import { useForm } from "react-hook-form";
import axios from "axios";

function AddBeerPage() {

    const { register, handleSubmit, reset, formState: { errors }} = useForm({mode: 'all'});

    const handleBeerSubmit = (beer) => {
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name: beer.name,
            tagline: beer.tagline,
            description: beer.description,
            first_brewed: beer.first_brewed,
            brewers_tips: beer.brewers_tips,
            attenuation_level: beer.attenuation_level,
            contributed_by: beer.contributed_by
        })
        reset();
    }

    

  return (
    <div>
        <h1>Add a beer!</h1>
        <form className="input form" onSubmit={handleSubmit(handleBeerSubmit)}>
            <div className="input-group mb-3">
                <input type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`} placeholder="Beer's name" {...register('name', {required: 'Name is required'})}/>
                {errors.name && (<small className="invalid-feedback">{errors.name.message}</small>)}
            </div>
            <div className="input-group mb-3">
                <input type="text" className={`form-control ${errors.tagline ? 'is-invalid' : ''}`} placeholder="Tagline" {...register('tagline', {required: 'tagline is required'})}/>
                {errors.tagline && (<small className="invalid-feedback">{errors.tagline.message}</small>)}
            </div>
            <div className="input-group mb-3">
                <textarea type="text" className={`form-control ${errors.description ? 'is-invalid' : ''}`} placeholder="Description" {...register('description', {required: 'Description is required'})}/>
                {errors.description && (<small className="invalid-feedback">{errors.description.message}</small>)}
            </div>
            <div className="input-group mb-3">
                <input type="text" className={`form-control ${errors.first_brewed ? 'is-invalid' : ''}`} placeholder="First brewed" {...register('first_brewed', {required: 'First brewed is required'})}/>
                {errors.first_brewed && (<small className="invalid-feedback">{errors.first_brewed.message}</small>)}
            </div>
            <div className="input-group mb-3">
                <input type="text" className={`form-control ${errors.brewers_tips ? 'is-invalid' : ''}`} placeholder="Brewer's Tips" {...register('brewers_tips', {required: 'First brewed is required'})}/>
                {errors.brewers_tips && (<small className="invalid-feedback">{errors.brewers_tips.message}</small>)}
            </div>
            <div className="input-group mb-3">
                <input type="number" className={`form-control ${errors.attenuation_level ? 'is-invalid' : ''}`} placeholder="Attenuation Level" {...register('attenuation_level', {required: 'First brewed is required'})}/>
                {errors.attenuation_level && (<small className="invalid-feedback">{errors.attenuation_level.message}</small>)}
            </div>
            <div className="input-group mb-3">
                <input type="text" className={`form-control ${errors.contributed_by ? 'is-invalid' : ''}`} placeholder="Contributed by" {...register('contributed_by', {required: 'contributed_by is required'})}/>
                {errors.contributed_by && (<small className="invalid-feedback">{errors.contributed_by.message}</small>)}
            </div>
            <button type="submit" className="btn btn-primary">Add beer</button>
        </form>
    </div>
  )
}

export default AddBeerPage