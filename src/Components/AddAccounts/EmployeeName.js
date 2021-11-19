import { React, useState } from "react";

import { Button, Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

import style from "./AddAccounts.module.css";

const EmployeeName = () => {
  const [input, setInput] = useState([]);

  const AddInputField = () => {
    setInput([...input, { empName: "" }]);
  };

  const handleChange = (e, i) => {
    const {name, value} = e.target;
    const inputLists = [...input];
    inputLists[i][name] = value;
    setInput(inputLists);
    console.log(inputLists);
  }

  const RemoveInput = (i) => {
    const inputList = [...input];
    inputList.splice(i, 1);
    setInput(inputList);
  };

  return (
    <>
      {input.length === 0 ? (
        <Button style={{ display: "inline" }} onClick={AddInputField}>
          click here to add company employees
        </Button>
      ) : (
        <Button style={{ display: "none" }}>
          click here to add company employees
        </Button>
      )}
      {input.length > 0 &&
        input.map((value, i) => {
          return (
            <Row key={i} className={style["empNameRow"]}>
              <Col sm={11} className={style["emp-name-col"]}>
                <Form.Group className="mb-0 mt-2">
                  <Form.Control
                    value={value.empName}
                    onChange={e => handleChange(e, i)}
                    name="empName"
                    type="text"
                    placeholder="Add Employee Name"
                  />
                </Form.Group>
              </Col>
              <Col sm={1} className={style["input-col"]}>
                {input.length -1 === i ?  (
                  <Button
                    onClick={AddInputField}
                    className={style["plus-button"]}
                    style={{ marginTop: ".5rem" }}
                  >
                    +
                  </Button> 
                  ) : (
                  <Button
                    onClick={() => RemoveInput(i)}
                    className={style["remove-button"]}
                    style={{ marginTop: ".5rem" }}
                  >
                    -
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
         <Row>
          <Col>
            <FormControl
              className="mt-5 mb-2"
              placeholder="Additional notes "
              as="textarea"
              rows={5}
            />
          </Col>
        </Row>
    </>
  );
};
export default EmployeeName;
