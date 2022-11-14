import { useLoaderData } from "react-router-dom";

export function BeerList() {
  const data = useLoaderData();
  console.log(data);

  
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
