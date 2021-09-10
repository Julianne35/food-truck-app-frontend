import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import style from "../../Media/Mobile.module.css";

const EmpDetailsList = ({ employee, balance, employeeId, companyId }) => {
  const bal = balance.map((res) => res);
  // const [index, setIndex] = useState([]);

  // const eid = employeeId.map((e) => e);
  return (
    <>
      <Container className="pl-1 pr-1 mt-4">
        <Row style={{ margin: "0.1rem" }}>
          {employee.map((emp, index) => (
            <Col sm={12} className={style["emp-mobile-col"]}>
              <h5 className={style["h5-employee"]}>{emp}:</h5>
              <Link
                to={{
                  pathname: `/addbalance/${emp}/${bal[index]}/${companyId}/${employeeId[index]}`,
                }}
                className={style["bal-btn"]}
              >
                <h5>Update Balance</h5>
              </Link>
              <Link to="#" className={style["view-btn"]}>
                <h5>View Account</h5>
              </Link>
            </Col>
          ))}
        </Row>
        <hr style={{ margin: ".5rem", backgroundColor: "white" }} />
        <Row>
          <Col>
            <FormControl
              className="mt-3 mb-2"
              placeholder="Additional notes "
              as="textarea"
              rows={3}
            />
          </Col>
        </Row>
      </Container>
      <div className="d-flex justify-content-center mt-1">
        <Button href="/main" className={style["container-exit-btn"]}>
          Exit Account
        </Button>
      </div>
    </>
  );
};
export default EmpDetailsList;
