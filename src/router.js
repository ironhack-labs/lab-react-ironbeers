import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Root from "./pages/Root";
import Beer, { BeersLoader } from "./pages/Beer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetails, { beerDetailsLoader } from "./pages/BeerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "beers",
        loader: BeersLoader,
        element: <Beer />,
      },
      {
        path: "/:id",
        loader: beerDetailsLoader,
        element: <BeerDetails />,
      },
      {
        path: "random",
        element: <RandomBeer />,
      },
      {
        path: "newbeer",
        element: <NewBeer />,
      },
    ],
  },
]);

export default router;
