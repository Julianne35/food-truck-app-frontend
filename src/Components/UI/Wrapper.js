import Header from "../UI/Header";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LoginButton from "../UI/LoginButton";

import style from "./Wrapper.module.css";

const Wrapper = props => {
  return (
    <>
    <Header />
      <Container className="p-3 mt-2">
        <Card className={style["wrapper--card"]}>
          <LoginButton />
         {props.children}
        </Card>
      </Container>
    </>
  );
};
export default Wrapper;
