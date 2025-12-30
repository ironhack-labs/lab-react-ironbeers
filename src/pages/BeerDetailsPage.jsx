import { useParams } from "react-router-dom";
import { BeerDetails } from "../components/beers";
import { PageLayout } from "../components/layout";

function BeerDetailsPage () {

  const { beerId } = useParams();

  return (
    <PageLayout>
      <BeerDetails id={ beerId }/>
    </PageLayout>
  );
}

export default BeerDetailsPage;