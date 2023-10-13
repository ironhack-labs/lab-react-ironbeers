import { useForm } from "react-hook-form";

function AddBeerPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, dirtyFields },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        reset();
      } else {
        console.error("POST ERROR:", response.statusText);
      }
    } catch (error) {
      console.error("Error SUBMIT:", error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className={`form-control ${
              errors.name ? "is-invalid" : dirtyFields.name && "is-valid"
            }`}
            id="name"
            placeholder="Enter Name"
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            {...register("tagline", { required: "Tagline is required" })}
            type="text"
            className={`form-control ${
              errors.tagline ? "is-invalid" : dirtyFields.tagline && "is-valid"
            }`}
            id="tagline"
            placeholder="Enter Tagline"
          />
          {errors.tagline && (
            <div className="invalid-feedback">{errors.tagline.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className={`form-control ${
              errors.description
                ? "is-invalid"
                : dirtyFields.description && "is-valid"
            }`}
            id="description"
            placeholder="Enter Description"
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            {...register("first_brewed", {
              required: "First Brewed is required",
            })}
            type="text"
            className={`form-control ${
              errors.first_brewed
                ? "is-invalid"
                : dirtyFields.first_brewed && "is-valid"
            }`}
            id="first_brewed"
            placeholder="Enter First Brewed"
          />
          {errors.first_brewed && (
            <div className="invalid-feedback">
              {errors.first_brewed.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">
            Brewer&apos;s Tips
          </label>
          <input
            {...register("brewers_tips", {
              required: "Brewer's Tips is required",
            })}
            type="text"
            className={`form-control ${
              errors.brewers_tips
                ? "is-invalid"
                : dirtyFields.brewers_tips && "is-valid"
            }`}
            id="brewers_tips"
            placeholder="Enter Brewer's Tips"
          />
          {errors.brewers_tips && (
            <div className="invalid-feedback">
              {errors.brewers_tips.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level
          </label>
          <input
            {...register("attenuation_level", {
              required: "Attenuation Level is required",
            })}
            type="number"
            className={`form-control ${
              errors.attenuation_level
                ? "is-invalid"
                : dirtyFields.attenuation_level && "is-valid"
            }`}
            id="attenuation_level"
            placeholder="Enter Attenuation Level"
          />
          {errors.attenuation_level && (
            <div className="invalid-feedback">
              {errors.attenuation_level.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            {...register("contributed_by", {
              required: "Contributed By is required",
            })}
            type="text"
            className={`form-control ${
              errors.contributed_by
                ? "is-invalid"
                : dirtyFields.contributed_by && "is-valid"
            }`}
            id="contributed_by"
            placeholder="Enter Contributed By"
          />
          {errors.contributed_by && (
            <div className="invalid-feedback">
              {errors.contributed_by.message}
            </div>
          )}
        </div>

        <div className="mb-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary" disabled={!isValid}>
            + Add Beer
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBeerPage;
