import Beer from "../components/Beer";

function RandomBeer({ beer }) {
  return (
    <div>
      <h1>Random Beer</h1>
      <Beer beer={beer} />
    </div>
  );
}

export default RandomBeer;
