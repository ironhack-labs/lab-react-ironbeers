import Header from "./Header";
import "./NewBeer.css";

function NewBeer({ callbackToHandleSubmit, setName, setDescription, setFirstBrewed, setBrewersTips, setAttenuationLevel, setTagline, setContributedBy}) {
  return (
    <div>
      <Header />
      <form onSubmit={callbackToHandleSubmit}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name ="name"
          placeholder="give it a name"
        />
        <input
          onChange={(e) => {
            setTagline(e.target.value);
          }}
          type="text"
          placeholder="give it a tagline"
        />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="describe it"
        />
        <input
          onChange={(e) => { setFirstBrewed(e.target.value) }}
          type="text"
          placeholder="when was it first made"
        />
        <input
          onChange={(e) => { setBrewersTips(e.target.value) }}
          type="text"
          placeholder="brewers Tips"
        />
        <input onChange={(e) => { setAttenuationLevel(e.target.value) }} type="number"  placeholder="attenuation level" />
        <input
          onChange={(e) => { setContributedBy(e.target.value) }}
          type="text"
          placeholder="brewers Tips"
        />
        <button>Create</button>
    </form>
    </div>
  );
}

export default NewBeer;
