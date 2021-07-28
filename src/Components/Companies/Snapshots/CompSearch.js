import React, { useContext, useRef, useState } from "react";
import CompDetails from "./CompDetails";
import { CompDetailsContext } from "./CompDetailsContext";
import { useLocation } from "react-router-dom";
import CompNameFilter from "./CompNameFilter";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import style from "./CompStyle.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

//mobile
import CompDetailsMobile from "../../Media/CompDetailsMobile";
import CompNameFilterMobile from "../../Media/CompNameFilterMobile";

const CompSerach = () => {
  const [company] = useContext(CompDetailsContext);
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

  // load media based on view port
  const location = useLocation();
  console.log("currentpath:", location.pathname);
  let isMobile;
  if (location.pathname === "/mobile") {
    isMobile = true;
  } else {
    isMobile = false;
  }

  const searchList = () => {
    if (searchShow) {
      return (
        <>
          {!isMobile && <CompDetails filtered={filtered} />}
          {isMobile && <CompDetailsMobile filtered={filtered} />}
        </>
      );
    }
  };

  const compNameList = () => {
    if (searchShow) {
      return (
        <>
          {!isMobile && <CompNameFilter filtered={filtered} />}
          {isMobile && <CompNameFilterMobile filtered={filtered} />}
        </>
      );
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
        <Card className="shadow p-2">
          <div>{compNameList()}</div>
          <Container className="border boreder-1">
            <div>{searchList()}</div>
          </Container>
        </Card>
      ) : (
        <div></div>
      )}
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
