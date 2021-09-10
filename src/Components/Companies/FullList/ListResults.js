import { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "../../UI/Wrapper";
import Container from "react-bootstrap/Container";
import GeneralInfoList from "./GeneralInfoList";
import { useParams } from "react-router-dom";
import EmpDetailsList from "./EmpDetailsList";

const ListResults = () => {
  // const [company, setCompany] = useContext(CompDetailsContext);
  const [company, setCompany] = useState([]);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [employee, setEmployee] = useState([]);
  const [balance, setBalance] = useState([]);
  const [employeeId, setEmployeeId] = useState([]);
  const { companyId } = useParams();
  // console.log("index", index)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-snapshot-id-test/${companyId}`)
      .then((res) => {
        // console.log(res.data.data);
        setCompany(res.data.data.company);
        setAddress(res.data.data.address);
        setPhone(res.data.data.phone);
        setEmployee(res.data.data.details.map((r) => r.employee));
        setEmployeeId(res.data.data.details.map((r) => r._id));
        setBalance(res.data.data.details.map((r) => r.balance));
      });
  }, [
    setCompany,
    setAddress,
    setPhone,
    setEmployee,
    setEmployeeId,
    setBalance,
    companyId,
  ]);
  return (
    <>
      <Container className="pl-1 pr-1 mt-4">
        <Wrapper>
          <h2 className="text-secondary">Company Name: {company} </h2>
          <hr />
          <GeneralInfoList address={address} phone={phone} />
          <EmpDetailsList
            employee={employee}
            balance={balance}
            companyId={companyId}
            employeeId={employeeId}
          />
          {/* {balance.map((res) => (<p>{res}</p>))} */}
        </Wrapper>
      </Container>
    </>
  );
};
export default ListResults;
