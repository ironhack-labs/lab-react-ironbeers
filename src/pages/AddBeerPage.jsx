import Navbar from "../components/Navbar";

function AddBeerPage() {
  return (
    <>
      <Navbar />
      <form>
        <label>
            Name:
          <input name="name" type="text"/>
          <br/>
        </label>

        <label>
        Tagline:
        <input name="tagline" type="text"/>
        <br/>

        </label>

        <label>
        Description:
        <textarea name="description" type="text"/>
        <br/>
        </label>

        <label>
        First Brewed:
          <input name="first_brewed" type="text"/>
          <br/>
        </label>

        <label>
        Brewer's Tips:
        <input name="brewers_tips" type="text"/>
        <br/>
        </label>

        <label>
        Attenuation Level:
        <input name="attenuation_level" type="number"/>
        <br/>
        </label>

        <label>
        Contributed By:
        <input name="contributed_by" type="text"/>
        <br/>
        </label>
        
        <button type="submit">Add Beer</button>
      </form>
    </>
  );
}

export default AddBeerPage;
