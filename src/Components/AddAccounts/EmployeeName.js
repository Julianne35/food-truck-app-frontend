import { React, useState } from "react";

import { Button, Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

import style from "./AddAccounts.module.css";

const EmployeeName = ({ employee, setEmployee, setDetails }) => {
  const [inputList, setInputList] = useState(employee);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
    setEmployee(value);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const AddInputField = () => {
    setInputList([...inputList, { employee: "" }]);
    setDetails([...inputList, { employee: "" }]);
  };

  const checkMedia = window.matchMedia("(min-width: 600px)");
  let writeOut;
  if (checkMedia.matches) {
    writeOut = true;
  } else {
    writeOut = false;
  }

  return (
    <>
      {employee.length === 0 ? (
        <Button style={{ display: "inline" }} onClick={AddInputField}>
          click here to add company employees
        </Button>
      ) : (
        <Button style={{ display: "none" }}>
          click here to add company employees
        </Button>
      )}
      {inputList.length > 0 &&
        inputList.map((emp, index) => {
          return (
            <Row key={index} className={style["empNameRow"]}>
              <Col sm={11} className={style["emp-name-col"]}>
                <Form.Group className="mb-0 mt-2">
                  <Form.Control
                    placeholder="Add Employee Name"
                    onChange={(e) => handleInputChange(e, index)}
                    value={emp.employee}
                    name="employee"
                    type="text"
                  />
                </Form.Group>
              </Col>
              <Col sm={1} className={style["input-col"]}>
                {inputList.length - 1 === index ? (
                  <Button
                    onClick={AddInputField}
                    className={style["plus-button"]}
                    style={{ marginTop: ".5rem" }}
                  >
                    {writeOut && "Add"}
                    {!writeOut && "Add Employee"}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleRemoveClick(index)}
                    className={style["remove-button"]}
                    style={{ marginTop: ".5rem" }}
                  >
                    {writeOut && "Remove"}
                    {!writeOut && "Remove Employee"}
                  </Button>
                )}
              </Col>
            </Row>
          );
        })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </>
  );
};
export default EmployeeName;



















// import { React, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";

// import style from "./AddAccounts.module.css";

// const EmployeeName = ({ employee, details, setEmployee, setUpdate }) => {
//   const [inputList, setInputList] = useState([{ employee: "" }]);

//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//     setEmployee(...details, value);
//   };

//   setUpdate((details) => {
//     const list = details.map((employee) => employee);
//     return {
//       list,
//     };
//   });

//   const handleRemoveClick = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };

//   const AddInputField = () => {
//     setInputList([...inputList, { employee: "" }]);
//   };

//   const checkMedia = window.matchMedia("(min-width: 600px)");
//   let writeOut;
//   if (checkMedia.matches) {
//     writeOut = true;
//   } else {
//     writeOut = false;
//   }

//   return (
//     <>
//       {inputList.length === 0 ? (
//         <Button style={{ display: "inline" }} onClick={AddInputField}>
//           click here to add company employees
//         </Button>
//       ) : (
//         <Button style={{ display: "none" }}>
//           click here to add company employees
//         </Button>
//       )}
//       {inputList.length > 0 &&
//         inputList.map((emp, i) => {
//           return (
//             <Row key={employee} className={style["empNameRow"]}>
//               <Col sm={11} className={style["emp-name-col"]}>
//                 <Form.Group className="mb-0 mt-2">
//                   <Form.Control
//                     placeholder="Add Employee Name"
//                     onChange={(e) => handleInputChange(e, i)}
//                     value={employee.employee}
//                     name="employee"
//                     type="text"
//                   />
//                 </Form.Group>
//               </Col>
//               <Col sm={1} className={style["input-col"]}>
//                 {inputList.length - 1 === i ? (
//                   <Button
//                     onClick={AddInputField}
//                     className={style["plus-button"]}
//                     style={{ marginTop: ".5rem" }}
//                   >
//                     {writeOut && "+"}
//                     {!writeOut && "Add Employee"}
//                   </Button>
//                 ) : (
//                   <Button
//                     onClick={() => handleRemoveClick(i)}
//                     className={style["remove-button"]}
//                     style={{ marginTop: ".5rem" }}
//                   >
//                     {writeOut && "-"}
//                     {!writeOut && "Remove Employee"}
//                   </Button>
//                 )}
//               </Col>
//             </Row>
//           );
//         })}
//       <Row>
//         <Col>
//           <FormControl
//             className="mt-5 mb-2"
//             placeholder="Additional notes "
//             as="textarea"
//             rows={5}
//           />
//         </Col>
//       </Row>

//       <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
//     </>
//   );
// };

// export default EmployeeName;















// import Input from "../UI/Input";
// import { Form } from "react-bootstrap";
// import { Col } from "react-bootstrap";

// // import style from "./AddAccounts.module.css";

// const AccountAddress = ({ employee, setEmployee }) => {
//   return (
//     <>
//       <Col sm={12} style={{ padding: "0" }}>
//         <Form.Group className="mb-0">
//           <Input
//             inputPlaceHolder="Enter Employee"
//             setInputValue={setEmployee}
//             inputValue={employee}
//             inputName={"employee"}
//             inputType={"text"}
//           />
//         </Form.Group>
//       </Col>
//     </>
//   );
// };
// export default AccountAddress;
