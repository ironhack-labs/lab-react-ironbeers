import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";

function App() {
  const isHomePage = useLocation();
  console.log(isHomePage);

  return (
    <div className="App">
      {isHomePage.pathname !== '/' && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
