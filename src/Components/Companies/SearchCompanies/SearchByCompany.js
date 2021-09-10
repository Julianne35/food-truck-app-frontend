import React, { useContext, useRef, useState } from "react";
import { CompDetailsContext } from "../../Companies/Snapshots/CompDetailsContext";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import EmpDetails from "../../Employees/EmpDetails";
import EmpCompNameFilter from "../../Employees/EmpCompNameFilter";
import CompInfoDetails from "./CompInfoDetails";
import style from "../../Companies/Snapshots/CompStyle.module.css";

const SearchByCompany = () => {
  const [company] = useContext(CompDetailsContext);
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  //filter company details
  const filtered = company.filter((res) => {
    return res.company.toLowerCase().includes(searchField.toLowerCase());
  });

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

  //loads company name "ABC employyes"
  const compName = () => {
    if (searchShow) {
      return <EmpCompNameFilter filtered={filtered} />;
    }
  };

  //loads in deatils for customer - address and phone number
  const compdeatils = () => {
    if (searchShow) {
      return <CompInfoDetails filtered={filtered} />;
    }
  };

  //loads in employee deatils
  const empDeatils = () => {
    if (searchShow) {
      return <EmpDetails filtered={filtered} />;
    }
  };

  return (
    <>
      <div className="d-flex">
        <FormControl
          type="search"
          placeholder="Type Customer Name Here"
          ref={inputRef}
          // onChange={e => setId(e.target.value)}
        />
        <Button
          className={style["comp-btn"]}
          style={{ width: "10rem", marginLeft: ".5rem" }}
          onClick={handleClick}
        >
          Enter
        </Button>
      </div>
      {/* MAKE SURE YOU CALL METHOD () */}
      {searchField !== "" ? (
        <Card className="shadow">
          <div>{compName()}</div>
          <div>{compdeatils()}</div>
          <div>{empDeatils()}</div>
        </Card>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SearchByCompany;

// import { CompInfoDetailsContext } from "./CompInfoDetailsContext";
// import { useLocation } from "react-router-dom";

// const [id, setId, setGetIdFromBtn] = useState(CompInfoDetailsContext);
// const [address] = useContext(CompInfoDetailsContext);

//filter company address and phone (company is used to search from customer name)
// const add = address.filter((res) => {
//   return res.company.toLowerCase().includes(searchField.toLowerCase());
// });

// console.log("add", address)

//load content based in user option
// const location = useLocation();
// let searchByEmpName;
// if (location.pathname === "/search-comp-detailsc ") {
//    searchByEmpName = true;
// } else {
//   searchByEmpName = false;
// };
