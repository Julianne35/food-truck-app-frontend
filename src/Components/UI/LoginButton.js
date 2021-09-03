import Button from "react-bootstrap/Button";

import style from "./LoginButton.module.css";

const Logout = () => {
  return (
    <>
      <div className={style["login-btn-wrapper"]}>
        <Button className={style["header--btn"]}>Logout</Button>
      </div>
    </>
  );
};
export default Logout;
