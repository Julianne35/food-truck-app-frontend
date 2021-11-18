import Wrapper from "../UI/Wrapper";
import AddAccountsDetails from "./AddAccountsDetails";

import style from "./AddAccounts.module.css";
import { Card } from "react-bootstrap";

const AddAccounts = () => {
  return (
    <>
      <Wrapper>
        <Card className={style["add-accounts-card"]}>
          <h2 className={style["add-accounts-header"]}>Add Accounts</h2>
        </Card>
        <AddAccountsDetails />
      </Wrapper>
    </>
  );
};
export default AddAccounts;
