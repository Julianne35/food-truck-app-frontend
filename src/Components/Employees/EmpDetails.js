import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import style from "../Media/Mobile.module.css";

const EmpDetails = ({ filtered }) => {
  const location = useLocation();
  let onShowTitle;
  if (location.pathname === "/search-comp-details") {
    onShowTitle = true;
  } else {
    onShowTitle = false;
  }

  // const testMe = (result) => {
  //   console.log(result.employee);
  // };

  return (
    <>
      <Container className="pl-1 pr-1 mt-4">
        {onShowTitle && <h3>Employee Actions</h3>}

        {filtered.map((result, id) =>
          result.details.map((inner) => (
            <>
              {/* for seach credit by customers - shows the results */}
              {!onShowTitle && (
                <Row style={{ margin: "0.1rem" }}>
                  <Col sm={12} className={style["emp-mobile-col"]}>
                    <h4 key={inner.id}>{inner.employee}</h4>
                  </Col>
                </Row>
              )}

              {onShowTitle && (
                <>
                  <Row style={{ margin: "0.1rem" }}>
                    <Col sm={12} className={style["emp-mobile-col"]}>
                      <h5 key={inner.id} className={style["h5-employee"]}>
                        {inner.employee}:
                      </h5>
                      <Link
                        to={{
                          pathname: `/addbalance/${inner.employee}/${inner.balance}/${result._id}/${inner._id}`,
                        }}
                        className={style["bal-btn"]}
                      >
                        <h5>Update Balance</h5>
                      </Link>
                      <Link to="#" className={style["view-btn"]}>
                        <h5>View Account</h5>
                      </Link>
                    </Col>
                  </Row>
                </>
              )}
              <hr style={{ margin: ".5rem", backgroundColor: "white" }} />
            </>
          ))
        )}

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
export default EmpDetails;
