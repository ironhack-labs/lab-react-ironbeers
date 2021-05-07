import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import CoasterDetails from '../pages/CoasterDetails/CoasterDetails'
import Beers from '../Pages/Beers'
import IndexPage from '../Index/Index-page'
// import NewCoaster from '../pages/NewCoaster/NewCoaster'


const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/beers"  render={() => <Beers />} />
            {/* <Route path="/montañas-rusas/detalles/:coaster_id" render={props => <CoasterDetails {...props} />} />
            <Route path="/montañas-rusas/nueva" render={() => <NewCoaster />} /> */}
        </Switch>

    )
}

export default Routes