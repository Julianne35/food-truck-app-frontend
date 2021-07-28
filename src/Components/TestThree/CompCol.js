import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./CompStyle.module.css";

const CompCol = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Row className={style["view-snap-row"]}>
          <Col className="mt-2 mb-2 d-flex justify-content-center" sm={3}>
            Employee
          </Col>
          <Col className="mt-2 mb-2 d-flex justify-content-center" sm={3}>
            Date
          </Col>
          <Col className="mt-2 mb-2 d-flex justify-content-center" sm={3}>
            Tax
          </Col>
          <Col className="mt-2 mb-2 d-flex justify-content-center" sm={3}>
            Balance
          </Col>
        </Row>
      </div>
    </>
  );
};
export default CompCol;
