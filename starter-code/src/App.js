import logo from "./logo.svg";
import "./App.css";

const App = () => <div>Iron Beers</div>;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});

export default App;
