import Header from "./UI/Header";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import style from "../Components/Login.module.css";

const Login = () => {
  return (
    <>
    <Header/>
      <Container className="p-3 mt-2">
        <Card className={style["input--card"]}>
          <h1 className={style["input--h1"]}>User login</h1>
          <Form>
            <div className="">
              <div className="">
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <Form.Label className={style["login--label"]}>
                    User Name
                  </Form.Label>
                  <Form.Control
                    className={style["login--control"]}
                    type="text"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className={style["pw--label"]}>
                    Password
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </div>
            </div>
            <Button className={style["login--btn"]} type="submit" href="/main">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};
export default Login;
