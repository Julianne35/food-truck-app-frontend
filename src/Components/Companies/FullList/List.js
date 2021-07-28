import axios from "axios";
import { useEffect, useState } from "react";
import Wrapper from "../../UI/Wrapper";

const List = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get-snapshot-test")
      .then((res) => {
        console.log("res", res.data)
        setCompany(res.data);
          })
      .catch((err) => {
        console.log(err);
      });
  }, [setCompany]);
  return (
    <>
      <Wrapper>
        <h2>Customer List</h2>
        {company.map((c,i) => (
            <li key={i}>{c.company}</li>
        ))}
      </Wrapper>
    </>
  );
};
export default List;
