function AddBeerPage() {
  <form onSubmit={handleSubmit}>
    <label>
      Name
      <input type="text" name="name" />
    </label>
    <label>
      Tagline
      <input type="text" name="Tagline" />
    </label>
    <label>
      Textarea
      <input type="text" name="description" />
    </label>
    <label>
      First Brewed
      <input type="text" name="first_brewed" />
    </label>
    <label>
      Brewer's Tips
      <input type="text" name="brewers_tips" />
    </label>
    <label>
      Attenuation Level
      <input type="number" name="attenuation_level" />
    </label>
    <label>
      Contributed By
      <input type="text" name="contributed_by" />
    </label>
    <label>
      <button onClick="AddBeer" type="submit" />
    </label>
  </form>;
}

export default AddBeerPage;
