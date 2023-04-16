import React from "react";
import { useForm } from "react-hook-form";
import { addNewBeer } from "../../services/beersService";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  const onNewBeer = (beer) => {
    addNewBeer(beer)
      .then((beer) => console.info(beer))
      .catch((error) => console.error(error));

    navigate("/");
  };

  return (
    <div>
      <form
        className="d-flex flex-column m-3 p-3"
        onSubmit={handleSubmit(onNewBeer)}
      >
        <label className="mb-3" htmlFor="name">
          Name
        </label>
        <input
          className={`mb-3 form-control ${errors.name ? "is-invalid" : ""}`}
          type="text"
          {...register("name", { required: "Name is required" })}
        ></input>
        {errors.name && (
          <div className="invalid-feedback">{errors.name?.message}</div>
        )}

        <label className="mb-3" htmlFor="tagline">
          Tagline
        </label>
        <input
          className={`mb-3 form-control ${errors.tagline ? "is-invalid" : ""}`}
          type="text"
          {...register("tagline", { required: "Tagline is required" })}
        ></input>
        {errors.tagline && (
          <div className="invalid-feedback">{errors.tagline?.message}</div>
        )}

        <label className="mb-3" htmlFor="description">
          Description
        </label>
        <input
          className={`mb-3 form-control ${
            errors.description ? "is-invalid" : ""
          }`}
          type="text"
          {...register("description", { required: "Description is required" })}
        ></input>
        {errors.description && (
          <div className="invalid-feedback">{errors.description?.message}</div>
        )}

        <label className="mb-3" htmlFor="first_brewed">
          First brewed
        </label>
        <input
          className={`mb-3 form-control ${
            errors.first_brewed ? "is-invalid" : ""
          }`}
          type="text"
          {...register("first_brewed", {
            required: "First brewed is required",
          })}
        ></input>
        {errors.first_brewed && (
          <div className="invalid-feedback">{errors.first_brewed?.message}</div>
        )}

        <label className="mb-3" htmlFor="attenuation_level">
          Attenuation level
        </label>
        <input
          className={`mb-3 form-control ${
            errors.attenuation_level ? "is-invalid" : ""
          }`}
          type="number"
          {...register("attenuation_level", {
            required: "Attenuation level is required",
          })}
        ></input>
        {errors.attenuation_level && (
          <div className="invalid-feedback">
            {errors.attenuation_level?.message}
          </div>
        )}

        <label className="mb-3" htmlFor="contributed_by">
          Contributed by
        </label>
        <input
          className={`mb-3 form-control ${
            errors.contributed_by ? "is-invalid" : ""
          }`}
          type="text"
          {...register("contributed_by", {
            required: "Contributors are required",
          })}
        ></input>
        {errors.contributed_by && (
          <div className="invalid-feedback">
            {errors.contributed_by?.message}
          </div>
        )}

        <button className="btn btn-secondary rounded rounded-3" type="submit">
          ADD NEW
        </button>
      </form>
    </div>
  );
}

export default NewBeer;
