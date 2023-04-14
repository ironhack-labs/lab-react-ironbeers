import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Beers from "./pages/Beers";
import Beer from "./pages/Beer";
import New from "./pages/New"
import Random from "./pages/Random";


function App() {
  return (
    <div className="container p-0">
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/beers'} element={<Beers />}></Route>
        <Route path={'/beer/:id'} element={<Beer/>}></Route>
        <Route path={'/random-beer'} element={<Random />}></Route>
        <Route path={'/new-beer'} element={<New />}></Route>
      </Routes>
    </div>
  );
}

export default App;
