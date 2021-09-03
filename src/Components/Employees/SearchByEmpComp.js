import React, { useContext, useRef, useState } from "react";
import { CompDetailsContext } from "../Companies/Snapshots/CompDetailsContext";
import { useLocation } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EmpDetails from "./EmpDetails";
import EmpDetailsByName from "./EmpDetailsByName";
import EmpCompNameFilter from "./EmpCompNameFilter";
import style from "../Companies/Snapshots/CompStyle.module.css";

const SearchByEmpComp = () => {
  const [company] = useContext(CompDetailsContext);
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  //load content based in user option
  const location = useLocation();
  let searchByEmpName;
  if (location.pathname === "/search-by-emp-name") {
    searchByEmpName = true;
  } else {
    searchByEmpName = false;
  }

  const filtered = company.filter((res) => {
    return res.company.toLowerCase().includes(searchField.toLowerCase());
  });

  const test = company.map((element) => {
    return {
      ...element,
      details: element.details.filter((details) =>
        details.employee.toLowerCase().includes(searchField.toLowerCase())
      ),
    };
  });
  

  // const test = company
  // .map((company) => {
  //   let details = company.details.filter((detail) =>
  //     detail.employee.toLowerCase().includes(searchField.toLowerCase())
  //   );
  //   if (!details.length) {
  //     return null;
  //   }
  //   return { ...company, details };
  // })
  // .filter(Boolean);

  const inputRef = useRef(null); // 1. Create the ref

  const handleClick = () => {
    const val = inputRef.current.value; // 3. Get the value
    setSearchField(val);

    if (val === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const deatils = () => {
    if (searchShow) {
      return (
        <>
          {!searchByEmpName && <EmpDetails filtered={filtered} />}
          {searchByEmpName && <EmpDetailsByName test={test} />}
        </>
      );
    }
  };

  const empName = () => {
    if (searchShow) {
      return <EmpCompNameFilter filtered={filtered} />;
    }
  };

  return (
    <>
      <div className="d-flex">
        <FormControl
          type="search"
          placeholder="Type Customer Name Here"
          ref={inputRef}
        />
        <Button
          className={style["comp-btn"]}
          style={{ width: "10rem", marginLeft: ".5rem" }}
          onClick={handleClick}
        >
          Enter
        </Button>
      </div>
      {searchField !== "" ? (
        <Card className="shadow p2">
          {!searchByEmpName && <div>{empName()}</div>}
          {searchByEmpName && <div>{null}</div>}
          <div>{deatils()}</div>
        </Card>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SearchByEmpComp;
