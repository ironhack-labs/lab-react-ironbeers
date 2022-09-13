import { Route, Routes } from "react-router";
import HomeScreen from "./screens/home-screen/HomeScreen";

function App() {
  return (
    <div>
    <Routes >
      <Route path="/" element={<HomeScreen />}></Route>
    </Routes >
    </div>
  );
}

export default App;
