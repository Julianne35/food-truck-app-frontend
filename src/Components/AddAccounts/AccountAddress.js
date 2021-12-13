import Input from "../UI/Input";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";

import style from "./AddAccounts.module.css";

const AccountAddress = ({ address, setAddress, phone, setPhone }) => {
  return (
    <>
      <Col sm={12} style={{ padding: "0" }}>
        <Form.Group className="mb-0">
          <Input
            inputPlaceHolder="Enter Address"
            setInputValue={setAddress}
            inputValue={address}
            inputName={"address"}
            inputType={"text"}
          />
        </Form.Group>
      </Col>
      <Col sm={12} className={style["act-phone-col"]}>
        <Form.Group className="mb-0 mt-2">
        <Input
            inputPlaceHolder="Enter Phone Number"
            setInputValue={setPhone}
            inputValue={phone}
            inputName={"phone"}
            inputType={"number"}
          />
        </Form.Group>
      </Col>
    </>
  );
};
export default AccountAddress;
