import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./layout/layout";
import "../public/styles/reset.css";
import { HomePage } from "./pages/Home.Page";
import { DetailsPage } from "./pages/Details.Page";
import { NewPage } from "./pages/New.Page";
import { ListPage } from "./pages/List.Page";
import { BeersContextProvider } from "./contexto/beers.Context";

export const App = () => {
  return (
    <BrowserRouter>
      <BeersContextProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={() => <HomePage />} />
            <Route path="/beers" exact component={() => <ListPage />} />
            <Route path={`/random-beer`} exact component={DetailsPage} />
            } />
            <Route path="/details-beer/:id" component={DetailsPage} />
            <Route path="/new-beer" exact component={() => <NewPage />} />
          </Switch>
        </Layout>
      </BeersContextProvider>
    </BrowserRouter>
  );
};
