import { data } from "../../helpers/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import LegenCard from "./LegendCard";
import Form from "react-bootstrap/Form";

const LegendContainer = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Form.Control
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search legends..."
        className="w-50 mx-auto my-2"
      />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row className="justiry-content-center g-3">
          {data
            .filter((legend) =>
              legend.nametoLowerCase().includes(search.trim().toLowerCase())
            )
            .map((legend) => (
              <LegendCard key={legend.id} legend={legend} />
            ))}
        </Row>
      </Container>
    </>
  );
};
export default LegendContainer;
