import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Input from "../../UI/Input";
import TextArea from "../../UI/TextArea";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import style from "./AddBal.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

const AddForm = () => {
  const [date] = useState(new Date().toLocaleString());
  const [newBalance, setNewBalance] = useState("");
  const [notes, setNotes] = useState("");
  const [total, setTotal] = useState("");
  const [fee, setFee] = useState("");
  const { companyId, employeeId } = useParams();
  const history = useHistory();

  const [state, setState] = useState({
    taxIsChecked: false,
    feeIsChecked: false,
  });

  // takes care of zero being striped
  const toFloatHundredth = (str) => Math.floor(100 * parseFloat(str)) / 100;

  const toEnUSLocale = (num) =>
    num.toLocaleString("en-US", {
      style: "decimal",
      minimumFractionDigits: 2,
    });

  //update balance
  const updateBal = () => {
    const calAddedBal = toFloatHundredth(newBalance);
    setTotal(toEnUSLocale(calAddedBal));
  };

  //add tax
  const addTax = () => {
    if (state.taxIsChecked) {
      setTotal(parseFloat(newBalance) * 0.09 + parseFloat(newBalance));
    }
  };

  //add late fee
  const addFee = () => {
    if (state.feeIsChecked) {
      const calAddedFee = toFloatHundredth(newBalance) + toFloatHundredth(fee);
      setTotal(toEnUSLocale(calAddedFee));
    }
  };

  //add late fee + tax
  const addTaxAndFee = () => {
    if (state.taxIsChecked && state.feeIsChecked) {
      const calAddedFeeAndTax =
        toFloatHundredth(newBalance) * 0.09 +
        toFloatHundredth(newBalance) +
        toFloatHundredth(fee);
      setTotal(toEnUSLocale(calAddedFeeAndTax));
    }
  };

  const addBalHandler = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:5000/update-snapshot-test/${companyId}/${employeeId}`,
      data: {
        balance: total,
        notes: notes,
        date: date,
      },
    }).then((res) => {
      history.push(`/success/${companyId}/${employeeId}` );
      console.log(res.data);
    });
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <form
      action="/update-snapshot-test/:companyId/:employeeId"
      method="post"
      onSubmit={addBalHandler}
      className="mt-4"
    >
      <div className=" ml-3 mr-3 d-flex justify-content-center">
        <Col className={style.date}>Date: {date}</Col>
      </div>

      {/*  BALANCE ------------------------------- */}
      <Col className="mt-4" sm={12}>
        <Input
          inputClassName={style["input"]}
          inputPlaceHolder={"Enter Updated Amount "}
          setInputValue={setNewBalance}
          inputValue={newBalance}
          inputName={"newBalance"}
          inputType={"number"}
          inputStep={"0.01"}
        />
      </Col>

      {/*  INPUTS ------------------------------- */}
      <div className="mt-4">
        <div className="mt-4 d-flex justify-content-center">
          <Col className={style["add-to-bal-col"]} sm={5}>
            <InputGroup className="d-flex align-items-center">
              <Form.Label className={style["add-bal"]}>Add Tax </Form.Label>
              <InputGroup.Checkbox
                type="checkbox"
                name="taxIsChecked"
                checked={state.taxIsChecked}
                onChange={handleChange}
                aria-label="Checkbox for following text input"
              />
            </InputGroup>
          </Col>
          <Col sm={1}></Col>
          <Col className={style["add-to-bal-col"]} sm={5}>
            <InputGroup>
              <Form.Label className={style["sub-bal"]}>Late Fee</Form.Label>
              <InputGroup.Checkbox
                type="checkbox"
                name="feeIsChecked"
                checked={state.feeIsChecked}
                onChange={handleChange}
                aria-label="Checkbox for following text input"
              />
            </InputGroup>
            {state.feeIsChecked && (
              <Input
                inputClassName={style["input-checked"]}
                inputPlaceHolder={"$0.00"}
                setInputValue={setFee}
                inputValue={fee}
                inputName={"fee"}
                inputType={"number"}
                inputStep={"0.01"}
              />
            )}
          </Col>
        </div>
      </div>

      {/*  TOTAL ------------------------------- */}
      <Col className={style["bal-col-3"]}>
        <Input
          inputClassName={style["input"]}
          inputPlaceHolder={"$0.00"}
          setInputValue={setTotal}
          inputValue={total}
          inputName={"total"}
          inputType={"number"}
          inputStep={"0.01"}
        />
        <Button
          onClick={() => {
            updateBal();
            state.taxIsChecked && addTax();
            state.feeIsChecked && addFee();
            addTaxAndFee && addTaxAndFee();
          }}
          className={style["container-total-btn"]}
        >
          Update
        </Button>
        <div>{state.taxIsChecked ? "Tax is added to balance" : null}</div>
        <div>{state.feeIsChecked ? "Late Fee is added to balance" : null}</div>
      </Col>

      <Col>
        <TextArea
          inputClassName={style["input-textarea"]}
          inputInline={{ margin: "3rem 0 2rem 0" }}
          inputPlaceHolder={"Additional notes"}
          setInputValue={setNotes}
          inputValue={notes}
          inputName={"notes"}
          inputType={"text"}
        />
      </Col>

      <div className="d-flex justify-content-center mt-1">
        <Button type="submit" className={style["container-exit-btn"]}>
          Save
        </Button>
      </div>
    </form>
  );
};
export default AddForm;
