import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import style from "../Media/Mobile.module.css";

const EmpCompName = ({ company }) => {
  return (
    <>
      <Row>
        <Col className="mt-4 pb-2 d-flex flex-wrap justify-content-center align-items-center">
          <h2 style={{color: "#008080"}}>Company: {company}</h2>
          <Row>
              <Col>
                  <Button className={style["add-btn"]}>Add +</Button>
                </Col>
            </Row>
        </Col>
      </Row>
    </>
  );
};
export default EmpCompName;
