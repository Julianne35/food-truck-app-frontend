import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CompName = ({company}) => {
  return (
    <>
      <Row>
        <Col className="mt-4 f-flex" sm={3}>
          <h2 style={{ width: "20rem" }}>Company: {company}</h2>
        </Col>
      </Row>
    </>
  );
};
export default CompName;
