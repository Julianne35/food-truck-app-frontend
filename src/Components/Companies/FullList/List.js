import { CompDetailsContext } from "../Snapshots/CompDetailsContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Wrapper from "../../UI/Wrapper";

const List = () => {
  const [company] = useContext(CompDetailsContext);

  const filterIndex = (index) => {
    // console.log("index", company[index]);
    return;
  };

  return (
    <>
      <Wrapper>
        <h2>Customer List</h2>

        {company.map((res, index, _id) => (
          <li key={res.company}>
            <Link
              to={`/resultslist/${res._id}` }
              onClick={() => {
                // console.log("_id", res._id)
                return res._id;
              }}
            >
              {res.company}
            </Link>
          </li>
        ))}
      </Wrapper>
    </>
  );
};
export default List;

  // const filterComp = (filterMap) => {
  //   console.log("compId", filterMap[filterIndex]);
  //   return filterMap;
  // };

  // const filterMap = company.map((resp) => {
  //   // console.log(resp._id);
  //   console.log(company);
  //   return resp._id;
  // });

