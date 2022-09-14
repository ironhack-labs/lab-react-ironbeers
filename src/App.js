import { Route, Routes } from "react-router-dom";
import { HomaPage, ListBeers, NewBeer, RandomBeer, SingleBear, NoPage } from "./pages";
import NavBar from "./pages/components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path='/' element={<HomaPage/>}/>
          <Route path='/beers' element={<ListBeers/>}/>
          <Route path='/beers/:id' element={<SingleBear/>}/>
          <Route path='/random-beer' element={<RandomBeer/>}/>
          <Route path='/new-beer' element={<NewBeer/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
