import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";

import style from "./AddAccounts.module.css";

const AccountAddress = () => {
  return (
    <>
      <Col sm={12} style={{padding: "0"}}>
        <Form.Group className="mb-0">
          <Form.Control type="text" placeholder="Enter Company Address" />
        </Form.Group>
      </Col>
      <Col sm={12} className={style["act-phone-col"]}>
        <Form.Group className="mb-0 mt-2">
          <Form.Control type="number" placeholder="Enter Company Phone Number" />
        </Form.Group>
      </Col>
    </>
  );
};
export default AccountAddress;
