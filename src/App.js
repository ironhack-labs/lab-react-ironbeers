import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import beersImg from "./assets/beers.png";
import randomBeersImg from "./assets/new-beer.png";
import newBeersImg from "./assets/random-beer.png";
import { Layout } from "./components/Layout";
import { BeerList } from "./components/BeerList";
import { Root } from "./components/Root";
import { getBeer } from "./util/api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home {...{ beersImg, newBeersImg, randomBeersImg }} />} />
      <Route element={<Layout />}>
        <Route path="beer-list" element={<BeerList />} loader={getBeer} />
        <Route path="random-beer"></Route>
        <Route path="new-beer"></Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
