import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import style from "../Media/Mobile.module.css";

const EmpDetailsByName = ({ test }) => {
  return (
    <>
  <Container className="pl-1 pr-1 mt-4">

  {test.map((result) => (
    result.details.map((inner) => (
    <>
  <Row className={style["emp-detail-row"]}>
    <Col sm={7} className={style["col-emp-by-name"]}><h5>{inner.employee}</h5></Col>
    <Col sm={5} className={style["emp-by-name-col"]}><h5>Customer: {inner.company}</h5></Col>
  </Row>

  <hr style={{ margin: ".5rem", backgroundColor: "white", }} />
  </>
  ))))}

</Container>
       <div className="d-flex justify-content-center mt-1">
        <Button href="/main" className={style["container-exit-btn"]}>Exit Account</Button>
      </div>
    </>
  );
};
export default EmpDetailsByName;