import { useLoaderData } from "react-router-dom";

export function BeerList({ params }) {
  const beers = useLoaderData;
  console.log(beers);
  console.log(params);

  return (
    <div>
      <h1>TEST</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum necessitatibus sit officia
        amet impedit quibusdam, quidem ipsum odio quisquam quis dolorum nam incidunt ipsa
        repellendus modi itaque iusto harum molestias!
      </p>
    </div>
  );
}
