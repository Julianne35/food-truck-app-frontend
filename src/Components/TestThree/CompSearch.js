import React, { useContext, useRef, useState } from "react";
import CompDetails from "./CompDetails";
import { CompLiContext } from "./CompLiContext";
import CompNameList from "./CompNameList";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CompCol from "./CompCol";
import style from "./CompStyle.module.css";

const CompSerach = () => {
  const [company] = useContext(CompLiContext);
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

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

  const searchList = () => {
    if (searchShow) {
      return (
        <>
          <CompDetails filtered={filtered} />
        </>
      );
    }
  };

  const compNameList = () => {
    if (searchShow) {
      return (
        <>
          <CompNameList filtered={filtered} />
        </>
      );
    }
  };

  return (
    <>
      <div className="d-flex">
        <h3 className="mr-1">Customer: </h3>
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
      <div>{compNameList()}</div>
      <CompCol/>
      <div>{searchList()}</div>
    </>
  );
};

export default CompSerach;

// const handleChange = (e) => {
//     setSearchField(e.target.value);
//     if (e.target.value === "") {
//       setSearchShow(false);
//     } else {
//       setSearchShow(true);
//     }
//     **setCompany(e.target.value);**
//   };
