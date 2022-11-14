import "./App.css";
import { Homepage } from "./components/Homepage";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container style={{ width: "75vw" }}>
      <Homepage />
    </Container>
  );
}

export default App;
