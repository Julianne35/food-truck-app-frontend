import { Button, Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import style from "./AddAccounts.module.css";

const EmployeeName = () => {
  return (
    <>
      <Row className={style["empNameRow"]}>
        <Col className={style["emp-name-col"]}>
          <Form.Group className="mb-0">
            <Form.Control type="text" placeholder="Add Employee Name" />
          </Form.Group>
        </Col>
        <Col>
          <Button className={style["plus-button"]}>+</Button>
        </Col>
      </Row>
      <Row className={style["empNameRow"]}>
        <Col className={style["emp-name-col"]}>
          <Form.Group className="mb-0 mt-2">
            <Form.Control type="text" placeholder="Add Employee Name" />
          </Form.Group>
        </Col>
        <Col>
          <Button className={style["plus-button"]} style={{marginTop: ".5rem"}}>+</Button>
        </Col>
      </Row>
    </>
  );
};
export default EmployeeName;
