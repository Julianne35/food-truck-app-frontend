import { useEffect, useState } from "react";
import axios from "axios";
// import { CompDetailsContext } from "../Snapshots/CompDetailsContext";
import Wrapper from "../../UI/Wrapper";
import { useParams } from "react-router-dom";

const ListResults = () => {
  // const [company, setCompany] = useContext(CompDetailsContext);
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const { companyId } = useParams();
  // console.log("index", index)

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-snapshot-id-test/${companyId}`)
      .then((res) => {
        setCompany(res.data.data.company);
        setAddress(res.data.data.address);
      });
  },[setCompany]);
  return (
    <>
      <Wrapper>
        <p>COMPANY NAME: {company} </p> 
        {/* test */}
        <p>ADDRESS: {address}</p>
      </Wrapper>
    </>
  );
};
export default ListResults;
