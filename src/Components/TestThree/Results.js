import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./CompStyle.module.css";

const Results = ({ employee, date, tax, balance }) => {
  return (
    <>
    <div className="d-flex justify-content-center">
        <Row key={employee} className={style["row-style"]}>
          <Col
            style={{ width: "26rem" }}
            className={style["snap-col-style-1"]}
            sm={3}
          >
            <p style={{fontSize: ".9rem" }}>{employee}</p>
          </Col>
          <Col className={style["snap-col-style-2"]} sm={3}>
          <p style={{fontSize: ".9rem" }}>{date}</p>
          </Col>
          <Col className={style["snap-col-style-1"]} sm={3}>
          <p style={{fontSize: ".9rem" }}>{tax}</p>
          </Col>
          <Col className={style["snap-col-style-2"]} sm={3}>
          <p style={{fontSize: ".9rem" }}>{balance}</p>
          </Col>
        </Row>
    </div>
    </>
  );
};
export default Results;
