import CompDetails from "./CompDetails";
import CompSerach from "./CompSearch";
import Wrapper from "../UI/Wrapper";
import style from "./CompStyle.module.css";

const Cont = () => {
  return (
    <>
      <div className={style["cont-width"]}>
        <Wrapper>
          <CompSerach details={<CompDetails />} />
        </Wrapper>
      </div>
    </>
  );
};
export default Cont;
