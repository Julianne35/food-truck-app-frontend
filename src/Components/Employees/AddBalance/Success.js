import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Wrapper from "../../UI/Wrapper";
import Button from "react-bootstrap/Button";
import style from "./Success.module.css";

const Success = () => {
  const [balance, setBalance] = useState("");
  const [employee, setEmployee] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const { companyId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-snapshot-id-test/${companyId}`)
      .then((res) => {
        setBalance(res.data.data.details.map((r) => r.balance));
        setEmployee(res.data.data.details.map((r) => r.employee));
        setNotes(res.data.data.details.map((r) => r.notes));
        setDate(res.data.data.details.map((r) => r.date));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setBalance, setEmployee, setNotes, companyId]);

  return (
    <>
      <Wrapper>
        
        <h2 className="text-success"><em>Successfully Updated Balance!</em></h2>
         <hr />
          <div className="border border-primary rounded mb-4">
          <h5 className="mt-2"> Date of transaction: {date} </h5>
          </div>
         { balance === "0.00" && <h4 className="text-success">{employee} is paid in full.</h4> }
         { balance !== "0.00" && <h4>{employee} new balance: ${balance}.</h4>}

         <div className="mb-4 pb-4 text-secondary">
         { notes !== "" &&<h5>Notes: {notes}</h5>}
         { notes === "" &&<h5>Notes: No notes at this time</h5>}
        </div>
        <div className="mb-2">
          <Button className={style["continue-btn"]} href="/search-comp-details">
            Continue seraching  
          </Button>
        </div>
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
