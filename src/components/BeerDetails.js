const BeerDetails = (props) => {
  console.log(props.beer);
  return (
    <section className="BeerDetails grid grid-cols-1 p-4 gap-2 mb-2  bg-gray-100 ">
      <img
        src={props.beer.image_url}
        alt={props.beer.name}
        className="col-span-1 m-auto h-72 w-auto"
      />
      <div className="text-container col-span-1 flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-1">
          {props.beer.name}
          <span className="inline-block absolute right-4 text-gray-500 font-normal">
            <span className="text-sm ">att-lvl.</span>
            {props.beer.attenuation_level}
          </span>
        </h2>
        <blockquote className="text-lg text-gray-500">
          {props.beer.tagline}
        </blockquote>
        <p className="text-sm mb-2">
          <span className="text-gray-500">First brewed</span>{" "}
          {props.beer.first_brewed} <span className="text-gray-500">by</span>{" "}
          {props.beer.contributed_by}.
        </p>
        <h3 className="text-md font-semibold">How Does It Taste</h3>
        <p className="mb-2">{props.beer.description}</p>
        <h3 className="text-md font-semibold">Brewer’s Tipps</h3>
        <p className="mb-2">{props.beer.brewers_tips}</p>
        <h3 className="text-md font-semibold">Food Pairings</h3>
        <ul className="mb-2">
          {props.beer.food_pairing.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default BeerDetails;
