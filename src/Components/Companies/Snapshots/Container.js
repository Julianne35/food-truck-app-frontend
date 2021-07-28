import CompDetails from "./CompDetails";
import CompSerach from "./CompSearch";
import Wrapper from "../../UI/Wrapper";
import Card from "react-bootstrap/Card";
import style from "./CompStyle.module.css";

const Container = () => {
  return (
    <>
      <div className={style["cont-width"]}>
        <Wrapper>
        <Card className={style["emp-container-card"]}><h2 className={style["comp-details-h2"]}>Search Customer Snap Shot</h2></Card>
          <CompSerach details={<CompDetails />} />
        </Wrapper>
      </div>
    </>
  );
};
export default Container;
