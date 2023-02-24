import Beer from "../components/Beer";

function RandomBeer({ beer, showDetails }) {
  return (
    <div>
      <h1>Random Beer</h1>
      <Beer
        beer={beer}
        showDetails={showDetails}
      />
    </div>
  );
}

export default RandomBeer;
