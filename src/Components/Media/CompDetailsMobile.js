import { useLocation } from "react-router";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import style from "./Mobile.module.css";

const CompDetailsMobile = ({ filtered }) => {
  const location = useLocation();
  let showDate;
  if (location.pathname === "/mobile") {
    showDate = true;
  } else {
    showDate = false;
  }
  return (
    <>
  <Container className="pl-1 pr-1">
  {filtered.map((result) => (
    <>
  <Card className="mt-3 mb-2 pt-2 pl-2">
      <h6 style={{color: "#1f4f83"}}>Date: {result.date}</h6>
  </Card>
  <Row style={{margin: "0 .1rem"}}>
    <Col sm={3} style={{width: "7rem"}} className={style["mobile-col"]}>Employee</Col>
    <Col className={style["mobile-col-emp"]}>{result.employee}</Col>
  </Row>
{ !showDate && <Row style={{margin: "0 .1rem"}}>
    <Col sm={3} style={{width: "7rem"}} className={style["mobile-col-2"]}>Date</Col>
    <Col className={style["mobile-col-date"]}><p className={style.date}>{result.date}</p></Col>
  </Row>}
  <Row style={{margin: "0 .1rem"}}>
    <Col sm={3} style={{width: "7rem"}}  className={style["mobile-col"]}>Tax</Col>
    <Col className={style["mobile-col-tax"]}>{String(result.tax)}</Col>
  </Row>
  <Row style={{margin: "0 .1rem"}}>
    <Col sm={3} style={{width: "7rem"}} className={style["mobile-col-2"]}>Balance</Col>
    <Col className={style["mobile-col-bal"]}>${result.balance.toFixed(2)}</Col>
  </Row>
  <hr style={{ padding: ".1rem", margin: ".5rem", backgroundColor: "#49505780", }} />
  </>
  ))}

</Container>
       <div className="d-flex justify-content-center mt-1">
        <Button className={style["container-exit-btn"]}>Exit Account</Button>
      </div>
    </>
  );
};
export default CompDetailsMobile;