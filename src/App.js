import { Route, Routes } from "react-router-dom";
import { HomaPage, ListBeers, NewBeer, RandomBeer, SingleBear, NoPage } from "./pages";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="*" element={<NoPage />} />
        <Route path='/' element={<HomaPage/>}/>
        <Route path='/:id' element={<SingleBear/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
        <Route path='/search?q={query}' element={<ListBeers/>}/>
      </Routes>
    </div>
  );
}

export default App;
