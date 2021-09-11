import Card from "react-bootstrap/Card";
import Wrapper from "../../UI/Wrapper";
import AddForm from "./AddForm";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import style from "./AddBal.module.css";
import "./style.css"

const AddEmpBalance = () => {
  const { employee, balance } = useParams();
  
  //addes "0" if balance as includes a  "."
  // const check = () => {
  //   if (balance.includes(".") ) {
  //     return 0
  //   } 
  // }

  return (
    <>
      <Wrapper>
        <Card className={style["title-card"]}>
          <h2 className={style.h2}>Add/Edit Employee Balance</h2>
        </Card>
        <Card className="shadow p-2">
            <div className="mt-4">
              <Col className={style["bal-col"]}>
                <h3 className={style.h3}><b>Employee:</b> {employee}</h3>
                <h3 className={style["h3-cur-bal"]}><b>Current Balance:</b> 
                     <div className=
                     // eslint-disable-next-line no-whitespace-before-property
                     {style [balance == 0 ? 'current-bal' : 'late-bal']}>
                        ${balance} {/*{check()} */}
                     </div> 
                </h3>
              </Col>
              <Col className={style["bal-col-2"]}>
               <AddForm employee={employee}/>
              </Col>
          </div>
         </Card>
      </Wrapper>
    </>
  );
};
export default AddEmpBalance;
