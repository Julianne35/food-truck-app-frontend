import useMediaQuery from "./Media/UseMediaQuery";
import Wrapper from "./UI/Wrapper";
import Button from "react-bootstrap/Button";
import style from "./Main.module.css";

const Main = () => {
  const matchesSm = useMediaQuery("(max-width: 575.98px)");

  return (
    <>
      <Wrapper>
        <div className={style["main-login-btn--wrap"]}>
        {matchesSm ? <Button href="/mobile" className={style["main-btn"]}>View Credit History</Button> :
          <Button href="/res-search" className={style["main-btn"]}>View Customer Credit History</Button> }
          <Button href="/options-comp" className={style["main-btn"]}>Search Customers</Button>
          <Button href="/options-emp"className={style["main-btn"]}>Search Employees</Button>
          <Button className={style["main-btn"]}>Add Accounts</Button>
        </div>
      </Wrapper>
    </>
  );
};
export default Main;