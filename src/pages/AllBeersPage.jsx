import { AllBeers } from "../components/beers";
import { PageLayout } from "../components/layout";

function AllBeersPage ({ items }) {
  return (
    <PageLayout>
      <AllBeers items={ items } />
    </PageLayout>
  );
}

export default AllBeersPage;