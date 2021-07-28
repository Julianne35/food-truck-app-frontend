import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import style from "./CompStyle.module.css";

const CompCol = () => {
  return (
    <>
    <div className="d-flex justify-content-center">
      <Row className={style["comp-col-current-wk-row"]}>
         <Card className="mb-2 pt-2 pl-2">
      <h5>Curent Week: "6/27/2021-/7/03/2021"</h5>
        </Card>
      </Row>
      </div>
      <div className="d-flex justify-content-center ml-4">
        <Row className={style["view-snap-row"]}>
          <Col className={style["comp-col-emp"]} sm={3}>Employee</Col>
          <Col className={style["comp-col-date"]} sm={3}>Date</Col>
          <Col className={style["comp-col-tax"]} sm={3}>Tax</Col>
          <Col className={style["comp-col-bal"]} sm={3}>Balance</Col>
        </Row>
      </div>
    </>
  );
};
export default CompCol;
