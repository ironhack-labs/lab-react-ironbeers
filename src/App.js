import { Route, Routes } from "react-router";
import HomePage from "./screens/home/HomePage";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
