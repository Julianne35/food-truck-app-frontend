import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "./CompStyle.module.css";

const Results = ({ employee, date, tax, balance }) => {
  // const check = () => {
  //   if (balance.includes(".") ) {
  //     return 0
  //   } 
  // }
  return (
    <>
      <hr style={{ padding: ".5px", margin: ".3rem", backgroundColor: "#d39e003b", }} />
      <div className="d-flex justify-content-center">
        <Row className={style["row-style"]}>
          <Col className={style["comp-col-row"]}>
            
            <Col className={style["res-col"]} sm={3}>
              <p className={style["p-emp"]}>{employee}</p>
            </Col>
            <Col className={style["res-col"]} sm={3}>
              <p className={style["p-date"]}>{date}</p>
            </Col>
            <Col className={style["res-col"]} sm={3}>
              <p className={style["p-tax"]}>{String(tax)}</p>
            </Col>
            <Col className={style["res-col"]} sm={3}>
              <p className={style["p-bal"]}>${balance}</p>
            </Col>
          </Col>
        </Row>
      </div>
      <hr style={{ padding: ".5px", margin: ".3rem", backgroundColor: "#d39e003b", }} />
    </>
  );
};
export default Results;
