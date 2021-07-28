import Results from "./Results";
import Button from "react-bootstrap/Button";
import CompCol from "./CompCol";
import style from "./CompStyle.module.css";

const CompDetails = ({ filtered }) => {
  const fltr = filtered.map((result) =>
    result.details.map((inner) => (
      <Results
        key={inner.id}
        employee={inner.employee}
        date={inner.date}
        tax={inner.tax}
        balance={inner.balance}
      />
    ))
  );
  return (
    <>
      <CompCol/>
      {fltr}
      <div className="d-flex justify-content-center mt-1">
        <Button href="/main" className={style["container-exit-btn"]}>Exit Account</Button>
      </div>
    </>
  );
};
export default CompDetails;
