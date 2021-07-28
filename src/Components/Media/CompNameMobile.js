import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CompNameMobile = ({ company }) => {
  return (
    <>
      <Row>
        <Col className="mt-4" sm={3}>
          <h2
            style={{ 
              width: "14.5rem", 
              marginLeft: "-.5rem", 
              color: "#1f4f83"
             }}
          >
            Company: {company}
          </h2>
        </Col>
      </Row>
    </>
  );
};
export default CompNameMobile;
