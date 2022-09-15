import { Route, Routes } from "react-router";
import AllBeersScreen from "./screens/all-beers/AllBeersScreen";
import DetailScreen from "./screens/detail/DetailScreen";
import HomeScreen from "./screens/home-screen/HomeScreen";
import NewBeerScreen from "./screens/new-beer/NewBeerScreen";
import RandomBeerScreen from "./screens/random-beer/RandomBeerScreen";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/detail/:id" element={<DetailScreen />}></Route>
        <Route path="/all-beers" element={<AllBeersScreen />}></Route>
        <Route path="/random-beer" element={<RandomBeerScreen />}></Route>
        <Route path="/new-beer" element={<NewBeerScreen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
