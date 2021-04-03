import { Route, Switch } from 'react-router-dom';

export default function Routerr() {
  return (
    <Switch>
      <Route path="/:id" children={<x />} />
      <Route path="/:id" component={<x />} />
    </Switch>
  );
}