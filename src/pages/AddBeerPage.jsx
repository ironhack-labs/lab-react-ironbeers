import { AddBeer } from '../components/beers';
import { PageLayout } from '../components/layout'

function AddBeerPage ({ onSubmitBeer, errorMessage }) {
  return (
    <PageLayout>
      <AddBeer 
        onSubmitBeer={ onSubmitBeer } 
        errorMessage={ errorMessage }/>
    </PageLayout>
  );
}

export default AddBeerPage;