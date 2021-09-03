import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

import { useLocation } from "react-router-dom";
import MainButton from "./MainButton";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import style from "../Main.module.css";

const SearchField = () => {
  const [id, setId] = useState(1)
  const [getIdfromBtn, setIdfromBtn] = useState("");

  const handleClick = () => {
    setIdfromBtn(id)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-snapshot-id/${getIdfromBtn}`)
      .then((res) => {
        console.log(res.data);
        setIdfromBtn(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getIdfromBtn]);

  const location = useLocation();
  let isOnMain;
  if (location.pathname === "/view-snapshot") {
    isOnMain = true;
  } else {
    isOnMain = false;
  }

  return (
    <>
      <Form className="d-flex">
        {!isOnMain && (
          <FormControl
            type="search"
            placeholder="Search"
            className="mt-1 mr-2"
            value={id}
            onChange={(e) => setId(e.target.value)}
            aria-label="Search"
          />
        )}
        {!isOnMain && (
          <Link to="/view-snapshot">
          <MainButton cName={style["viewsnaphot-btn"]} onClick={handleClick}> 
            View Snap Shot
          </MainButton>
          </Link>
        )}

        {isOnMain && (
          <FormControl
            type="search"
            placeholder="Search"
            className="mt-1 mr-2"
            // value={}
            // onChange={}
            aria-label="Search"
          />
        )}
        {isOnMain && (
          <MainButton cName={style["search-btn"]}>Search</MainButton>
        )}
      </Form>
    </>
  );
};
export default SearchField;
