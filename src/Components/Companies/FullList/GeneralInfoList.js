import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import style from "../SearchCompanies/SearchComp.module.css";

const GeneralInfoList = ({address, phone}) => {
  return (
    <>
      <Row style={{ margin: "0.1rem" }}>
        <Col sm={4} className={style["comp-address-col"]}>
          <h5 className={style["add-info-title"]}>Address:</h5>
        </Col>
        <Col sm={8} className={style["comp-result-address-col"]}>
          <h5 className={style["add-info"]}> {address}</h5>
        </Col>
        <Col sm={4} className={style["comp-phone-col"]}>
          <h5 className={style["add-info-title"]}>Phone:</h5>
        </Col>
        <Col sm={8} className={style["comp-result-phone-col"]}>
          <h5 className={style["add-info"]}> {phone}</h5>
        </Col>
      </Row>
    </>
  );
};
export default GeneralInfoList;
