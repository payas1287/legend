import Container from "react-bootstrap/Container";
import Header from "./components/header/Header"
import LegendContainer from "./components/legend/LegendContainer";

function App() {
  return (
    <Container className="text-center my-5">
      <Header />
      <LegendContainer />
    </Container>
  )
}

export default App;
