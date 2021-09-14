import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../UI/Wrapper";
import Button from "react-bootstrap/Button";
import style from "./Success.module.css";
import SuccessDetails from "./SuccessDeatils";

const Success = () => {
  const [_id, setId] = useState([]);
  const [company, setCompany] = useState([]);
  const [balance, setBalance] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [notes, setNotes] = useState([]);
  const [date, setDate] = useState("");
  const { companyId, employeeId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-snapshot-id-test/${companyId}/${employeeId}`)
      .then((res) => {
        setCompany(res.data.data.company);
        setEmployee(res.data.data.details.map((r) => r.employee))
        setBalance(res.data.data.details.map((r) => r.balance));
        setNotes(res.data.data.details.map((r) => r.notes));
        setDate(res.data.data.details.map((r) => r.date));
        setId(res.data.data.details.map((r) => r._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setId, setBalance, setEmployee, setNotes, companyId, employeeId]);

  return (
    <>
      <Wrapper>
        <h2 className="text-success">
          <em>Successfully Updated Balance!</em>
        </h2>
        <hr />
        <div className="border border-primary rounded mb-4">
          <h5 className="mt-2"> Date of transaction: {date}  </h5>
        </div>
        <SuccessDetails
          employee={employee}
          balance={balance}
          notes={notes}
          company={company}
          employeeId={employeeId}
          _id={_id}
        />
        <div>
          <Button className={style["back-btn"]} href="/main">
            Back to Main
          </Button>
        </div>
      </Wrapper>
    </>
  );
};
export default Success;
