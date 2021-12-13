import Input from "../UI/Input";
import { Form } from "react-bootstrap";

const CompanyName = ({ company, setCompany }) => {
  return (
    <>
      <Form.Group className="m-0">
        <Input
          inputPlaceHolder="Enter Company Name"
          setInputValue={setCompany}
          inputValue={company}
          inputName={"company"}
          inputType={"text"}
        />
      </Form.Group>
    </>
  );
};
export default CompanyName;
