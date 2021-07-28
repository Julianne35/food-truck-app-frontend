import { useLocation } from "react-router";
import SearchByEmpComp from "./SearchByEmpComp";
import Wrapper from "../UI/Wrapper";
import EmpDetails from "./EmpDetails";
import EmpDetailsByName from "./EmpDetailsByName";
import style from "../Companies/Snapshots/CompStyle.module.css";
import Card from "react-bootstrap/Card";

const EmpContainer = () => {
  const location = useLocation();
  let searchByEmpName;
  if (location.pathname === "/search-by-emp-name") {
    searchByEmpName = true;
  } else {
    searchByEmpName = false;
  }
  return (
    <>
      <div className={style["cont-width"]}>
        <Wrapper>
        { !searchByEmpName && <Card className={style["emp-container-card"]}><h2 className={style["comp-details-h2"]}>Search Credit By Customers</h2></Card> }
        { searchByEmpName && <Card className={style["emp-container-card"]}><h2 className={style["comp-details-h2"]}>Search Credit By Employees</h2></Card> }
        
         { !searchByEmpName && <SearchByEmpComp details={<EmpDetails />} />}
         { searchByEmpName && <SearchByEmpComp details={<EmpDetailsByName />} />}
        </Wrapper>
      </div>
    </>
  );
};
export default EmpContainer;
