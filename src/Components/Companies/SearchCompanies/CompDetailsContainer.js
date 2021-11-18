import CompInfoDetails from "./CompInfoDetails";
import SearchByCompany from "./SearchByCompany";
import Wrapper from "../../UI/Wrapper";
import Card from "react-bootstrap/Card";
import style from "../Snapshots/CompStyle.module.css";

const CompDeatilsContainer = () => {
  return (
    <>
      <div className={style["cont-width"]}>
        <Wrapper>
          <Card className={style["emp-container-card"]}>
            <h2 className={style["comp-details-h2"]}>Search Customer Info</h2>
          </Card>
          <SearchByCompany details={<CompInfoDetails />} />
        </Wrapper>
      </div>
    </>
  );
};
export default CompDeatilsContainer;
