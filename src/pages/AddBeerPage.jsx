import axios from "axios";
import { useForm } from "react-hook-form";

function AddBeerPage() {

  const { reset ,register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'all' });

  const handleForm = (form) => {
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form)
      .then((response) => console.log("Beer added successfully!"))
      .catch((error) => console.error("There was an error", error))

    reset();
  }

  return (
    <>
      <form className="relative flex flex-col bg-clip-border rounded-xl bg-cyan-300 shadow-md mt-6 w-96 mx-auto" onSubmit={handleSubmit(handleForm)}>
        {/* NAME */}
        <div className="flex flex-col">
          <span htmlFor="name" className="capitalize text-center my-1">name</span>
          <input id="name" type="text" className={`${errors.name ? 'is-invalid' : ''} bg-cyan-100 text-center h-8`} placeholder="Name..."
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name needs at least 3 chars'
                }
              })} />
          {errors.name && (<div className="invalid-feedback font-bold text-red-900 ms-2">{errors.name.message}</div>)}
        </div>

        {/* TAGLINE */}
        <div className="flex flex-col">
          <span htmlFor="tagline" className="capitalize text-center my-1">Tagline</span>
          <input id="tagline" type="text" className={`${errors.tagline ? 'is-invalid' : ''} bg-cyan-100 text-center h-8`} placeholder="Tagline..."
              {...register('tagline', {
                required: 'Tagline is required',
                minLength: {
                  value: 5,
                  message: 'Tagline needs at least 5 chars'
                }
              })} />
          {errors.tagline && (<div className="invalid-feedback font-bold text-red-900 ms-2">{errors.tagline.message}</div>)}
        </div>

        {/* DESCRIPTION */}
        <div className="flex flex-col">
          <span htmlFor="description" className="capitalize text-center my-1">Description</span>
          <textarea id="description" type="text-area" className={`${errors.description ? 'is-invalid' : ''} bg-cyan-100 text-center h-20`} placeholder="Refreshing golden ale with hints of citrus and a crisp, clean finish..."
              {...register('description', {
                required: 'Description is required',
                minLength: {
                  value: 10,
                  message: 'Description needs at least 10 chars'
                }
              })} />
          {errors.description && (<div className="invalid-feedback font-bold text-red-900 ms-2">{errors.description.message}</div>)}
        </div>

        {/* FIRST BREWED */}
        <div className="flex flex-col">
          <span htmlFor="firstBrewed" className="capitalize text-center my-1">First brewed</span>
          <input id="firstBrewed" type="text" className={`${errors.first_brewed ? 'is-invalid' : ''} bg-cyan-100 text-center h-8`} placeholder="04/2019"
              {...register('first_brewed', {
                required: 'First brewed is required',
                minLength: {
                  value: 6,
                  message: 'First brewed needs at least 6 chars'
                }
              })} />
          {errors.first_brewed && (<div className="invalid-feedback font-bold text-red-900 ms-2">{errors.first_brewed.message}</div>)}
        </div>

        {/* BREWER'S TIPS */}
        <div className="flex flex-col">
          <span htmlFor="brewer_tips" className="capitalize text-center my-1">Brewer's tips</span>
          <input id="brewer_tips" type="text" className={`${errors.brewer_tips ? 'is-invalid' : ''} bg-cyan-100 text-center h-8`} placeholder="The earthy and floral aromas..."
              {...register('brewer_tips', {
                required: "Brewer's tips is required",
                minLength: {
                  value: 10,
                  message: "Brewer's tips needs at least 5 chars"
                }
              })} />
          {errors.brewer_tips && (<div className="invalid-feedback font-bold text-red-900 ms-2">{errors.brewer_tips.message}</div>)}
        </div>

        {/* ATTENUATION LEVEL */}
        <div className="flex flex-col">
          <span htmlFor="attenuation_level" className="capitalize text-center my-1">Attenuation level</span>
          <input id="attenuation_level" type="number" className={`${errors.attenuation_level ? 'is-invalid' : ''} bg-cyan-100 text-center h-8`} placeholder="75"
              {...register('attenuation_level', {
                required: 'Attenuation level is required',
                validate: value => {
                  if (isNaN(value)) {
                    return "Attenuation level must be a number";
                  }
                  return true;
                }
              })} />
          {errors.attenuation_level && (<div className="invalid-feedback font-bold text-red-900 ms-2">{errors.attenuation_level.message}</div>)}
        </div>

        {/* CONTRIBUTED BY */}
        <div className="flex flex-col">
          <span htmlFor="contributed_by" className="capitalize text-center my-1">Contributed by</span>
          <input id="contributed_by" type="text" className={`${errors.contributed_by ? 'is-invalid' : ''} bg-cyan-100 text-center h-8`} placeholder="Lucas"
              {...register('contributed_by', {
                required: 'Contributed by is required',
                minLength: {
                  value: 5,
                  message: 'Contributed by needs at least 5 chars'
                }
              })} />
          {errors.contributed_by && (<div className="invalid-feedback font-bold text-red-900 ms-2">{errors.contributed_by.message}</div>)}
        </div>

        <div className="h-20 text-center">
          <button type="submit" className="h-10 border border-white w-52 mx-auto my-3" disabled={!isValid}>Skol! <span className="material-symbols-outlined align-bottom animate-bounce">sports_bar</span></button>
        </div>
      </form>
    </>
  );
}

export default AddBeerPage;

