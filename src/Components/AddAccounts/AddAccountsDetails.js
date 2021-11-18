import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AccountAddress from "./AccountAddress";
import EmployeeName from "./EmployeeName";

import style from "./AddAccounts.module.css";


const AddAccountsDetails = () => {
  const checkMedia = window.matchMedia("(min-width: 600px)");
  let mediaIsSmall;
  if (checkMedia.matches) {
    mediaIsSmall = true;
  } else {
    mediaIsSmall = false;
  }
  return (
    <>
      <Form>
        <h2 className={style["company-info-title"]}>Company Info</h2>
        <Row>
          <Col className="m-0" sm={11}>
            <Form.Group className="m-0">
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          </Col>
          <Col sm={1} className={style["check-background"]}>
            <Form.Group className="p-0" controlId="formBasicCheckbox">
              {!mediaIsSmall && (
                <Form.Check className={style["form-check"]} type="checkbox" label="Make Customer VIP" />
              )}
              {mediaIsSmall && <Form.Check className={style["form-check"]} type="checkbox" label="VIP" />}
            </Form.Group>
          </Col>
          </Row>
          <Row className={style["act-details-row"]}>
          <Col>
            <AccountAddress />
          </Col>

          <Col>
          <hr className="mt-3 mb-3"/>
          <h2 className={style["add-employees-title"]}>Employee Info</h2>
            <EmployeeName />
          </Col>
        </Row>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default AddAccountsDetails;
