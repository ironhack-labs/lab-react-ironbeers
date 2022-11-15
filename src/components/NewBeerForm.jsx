import { Form, redirect } from "react-router-dom";
import { createNewBeer } from "../util/api";

export function NewBeerForm() {
  return (
    <div>
      <Form method="post" action="/create-new-beer">
        <fieldset>
          <legend>Enter New Beer</legend>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <br />
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" />
          <br />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
          <br />
          <label htmlFor="first_brewed">First brewed</label>
          <input type="text" name="first_brewed" />
          <br />
          <label htmlFor="brewers_tips">Brewers tips</label>
          <input type="text" name="brewers_tips" />
          <br />
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input type="number" name="attenuation_level" />
          <br />
          <label htmlFor="contributed_by">Contributed by</label>
          <input type="text" name="contributed_by" />
        </fieldset>
        <button>Submit</button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const post = {
    name: formData.get("name"),
    tagline: formData.get("tagline"),
    description: formData.get("description"),
    first_brewed: formData.get("first_brewed"),
    brewers_tips: formData.get("brewers_tips"),
    attenuation_level: formData.get("attenuation_level"),
    contributed_by: formData.get("contributed_by"),
  };
  await createNewBeer(post);
  return redirect("/");
}
