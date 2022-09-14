import { Route, Routes } from "react-router";
import NavBar from "./components/ui/nav-bar/NavBar";
import AllBeers from "./screens/all-beers/AllBeers";
import Detail from "./screens/detail/Detail";
import HomeScreen from "./screens/home-screen/HomeScreen";
import NewBeer from "./screens/new-beer/NewBeer";
import RandomBeer from "./screens/random-beer/RandomBeer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes >
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/all-beers" element={<AllBeers />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
      </Routes >
    </div>
  );
}

export default App;
