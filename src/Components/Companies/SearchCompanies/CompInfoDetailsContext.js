import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CompInfoDetailsContext = createContext();

export const CompInfoProvider = (props) => {
  const [getCompValueFromBtn] = useState("");
  const [address, setAddress] = useState([]);

  useEffect(() => {
      axios
      .get(`http://localhost:5000/get-info/${getCompValueFromBtn}`)
      .then((res) => {
        // console.log("address:", res.data);
        setAddress(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [setAddress, getCompValueFromBtn]);

  return (
    <>
      <CompInfoDetailsContext.Provider 
        value={[ address, setAddress]}>
        {props.children}
      </CompInfoDetailsContext.Provider>
    </>
  );
};














// axios set up here
// const [results, setResults] = useState([
//   {
//     id: 1,
//     name: "Comp ABC",
//     employee: "Jane Doe",
//     date: "May 1 2020",
//     amount: "2.00",
//   },
//   {
//     id: 2,
//     name: "Comp EFGH",
//     employee: "George Doe",
//     date: "June 1 2020",
//     amount: "3.00",
//   },
//   {
//     id: 3,
//     name: "Comp IJKL",
//     employee: "Jesus Ramos",
//     date: "Dec 1 2020",
//     amount: "1.00",
//   },
// ]);
