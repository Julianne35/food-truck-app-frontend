import { React, useState } from "react";
import axios from "axios";
import AccountAddress from "./AccountAddress";
import CompanyName from "./CompanyName";
import EmployeeName from "./EmployeeName";
import { Button, Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

import style from "./AddAccounts.module.css";

const AddAccountsDetails = () => {
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [employee, setEmployee] = useState("");
  const [details, setDetails] = useState([{ employee }]);

  const addAccountHandler = (e) => {
    e.preventDefault();
    setDetails((details) => [...details, { employee: employee }]);
    // console.log("details", details);
    // console.log("employeedata", employee);

    axios({
      method: "POST",
      url: "http://localhost:5000/create-snapshot-test",
      data: {
        company: company,
        address: address,
        phone: phone,
        employee: employee,
        details: details,
      },
    });
  };

  const checkMedia = window.matchMedia("(min-width: 600px)");
  let mediaIsSmall;
  if (checkMedia.matches) {
    mediaIsSmall = true;
  } else {
    mediaIsSmall = false;
  }

  return (
    <>
      <Form
        action="/create-snapshot-test"
        method="post"
        onSubmit={addAccountHandler}
      >
        <h2 className={style["company-info-title"]}>Company Info</h2>
        <Row>
          <Col className="m-0" sm={11}>
            <CompanyName company={company} setCompany={setCompany} />
          </Col>
          <Col sm={1} className={style["check-background"]}>
            <Form.Group className="p-0" controlId="formBasicCheckbox">
              {!mediaIsSmall && (
                <Form.Check
                  className={style["form-check"]}
                  type="checkbox"
                  label="Make Customer VIP"
                />
              )}
              {mediaIsSmall && (
                <Form.Check
                  className={style["form-check"]}
                  type="checkbox"
                  label="VIP"
                />
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className={style["act-details-row"]}>
          <Col>
            <AccountAddress
              address={address}
              setAddress={setAddress}
              phone={phone}
              setPhone={setPhone}
            />
          </Col>
          <Col>
            <hr className="mt-3 mb-3" />
            <h2 className={style["add-employees-title"]}>Employee Info</h2>
            <EmployeeName
              employee={employee}
              setEmployee={setEmployee}
              setDetails={setDetails}
            />
          </Col>
        </Row>
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
        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
export default AddAccountsDetails;











// import { AddAccountsContxt } from "./AddAccountsContxt";
// import { Button, Form } from "react-bootstrap";
// import { Col } from "react-bootstrap";
// import { Row } from "react-bootstrap";
// import { FormControl } from "react-bootstrap";
// import AccountAddress from "./AccountAddress";
// import style from "./AddAccounts.module.css";
// import EmployeeName from "./EmployeeName";
// import { React, useContext } from "react";
// import CompanyName from "./CompanyName";

// const AddAccountsDetails = () => {
//   const [
//     employee,
//     setEmployee,
//     company,
//     setCompany,
//     address,
//     setAddress,
//     phone,
//     setPhone,
//     details,
//     setDetails,
//     addAccountHandler,
//   ] = useContext(AddAccountsContxt);
//   const checkMedia = window.matchMedia("(min-width: 600px)");
//   let mediaIsSmall;
//   if (checkMedia.matches) {
//     mediaIsSmall = true;
//   } else {
//     mediaIsSmall = false;
//   }
//   return (
//     <>
//       <Form
//         action="/create-snapshot-test"
//         method="post"
//         onSubmit={addAccountHandler}
//       >
//         <h2 className={style["company-info-title"]}>Company Info</h2>
//         <Row>
//           <Col className="m-0" sm={11}>
//             <CompanyName company={company} setCompany={setCompany} />
//           </Col>
//           <Col sm={1} className={style["check-background"]}>
//             <Form.Group className="p-0" controlId="formBasicCheckbox">
//               {!mediaIsSmall && (
//                 <Form.Check
//                   className={style["form-check"]}
//                   type="checkbox"
//                   label="Make Customer VIP"
//                 />
//               )}
//               {mediaIsSmall && (
//                 <Form.Check
//                   className={style["form-check"]}
//                   type="checkbox"
//                   label="VIP"
//                 />
//               )}
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row className={style["act-details-row"]}>
//           <Col>
//             <AccountAddress
//               address={address}
//               setAddress={setAddress}
//               phone={phone}
//               setPhone={setPhone}
//             />
//           </Col>
//           <Col>
//             <hr className="mt-3 mb-3" />
//             <h2 className={style["add-employees-title"]}>Employee Info</h2>
//             <EmployeeName
//               employee={employee}
//               setEmployee={setEmployee}
//               details={details}
//               setDetails={setDetails}
//             />
//           </Col>
//         </Row>
//         <Row>
//           <Col>
//             <FormControl
//               className="mt-5 mb-2"
//               placeholder="Additional notes "
//               as="textarea"
//               rows={5}
//             />
//           </Col>
//         </Row>

//         <Button className="mt-3" variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };
// export default AddAccountsDetails;
