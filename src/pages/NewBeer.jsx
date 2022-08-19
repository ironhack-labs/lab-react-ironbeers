import React from "react";

function NewBeer() {
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-center">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <label className="text-center" htmlFor="">
              Description
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewBeer;
