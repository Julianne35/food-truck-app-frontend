// import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import style from "./SearchComp.module.css";

const CompInfoDetails = ({ add }) => {
  return (
    <>
      <Container className="pl-1 pr-1 mt-4">
        <h3>General Information</h3>

        {add.map((result, id) => (
          <>
            <Row style={{ margin: "0.1rem" }}>
              <Col sm={4} className={style["comp-address-col"]}>
                <h5 className={style["add-info-title"]}>Address:</h5>
              </Col>
              <Col sm={8} className={style["comp-result-address-col"]}>
                <h5 className={style["add-info"]} 
                    key={result.id}> {result.address}</h5>
              </Col>
              <Col sm={4} className={style["comp-phone-col"]}>
                <h5 className={style["add-info-title"]}>Phone:</h5>
              </Col>
              <Col sm={8} className={style["comp-result-phone-col"]}>
                <h5 className={style["add-info"]} 
                    key={result.id}> {result.phone}</h5>
              </Col>
            </Row>
          </>
        ))}
      </Container>
    </>
  );
};
export default CompInfoDetails;
