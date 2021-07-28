import { useLocation } from "react-router";

import Wrapper from "./UI/Wrapper";
import Button from "react-bootstrap/Button";
import style from "./Main.module.css";

const Options = () => {
    const location = useLocation();

    let optionComp;
    if (location.pathname === "/options-comp") {
      optionComp = true;
    } else {
      optionComp = false;
    }
  
    let optionEmp;
    if (location.pathname === "/options-emp") {
      optionEmp = true;
    } else {
      optionEmp = false;
    }
  return (
    <>
      <Wrapper>
      { optionEmp && <div className={style["main-login-btn--wrap"]}>
          <Button href="/emp-search-by-comp-name" className={style["main-btn"]}>Search Employee By Customer Name</Button>
          <Button href="/search-by-emp-name" className={style["main-btn"]}>Search Employee By Name</Button>
        </div>}

       { optionComp && <div className={style["main-login-btn--wrap"]}>
          <Button href="/search-comp-details" className={style["main-btn-2"]}>Search Customer By Name</Button>
          <Button href="/list" className={style["main-btn-2"]}>View All Customers By List</Button>
        </div> }
      </Wrapper>
    </>
  );
};

export default Options;
