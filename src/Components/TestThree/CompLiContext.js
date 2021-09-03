import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CompLiContext = createContext();

export const CompLiProvider = (props) => {
  const [getValueFromBtn] = useState("");

  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-snapshot-test/${getValueFromBtn}`)
      .then((res) => {
        // console.log("test",res.data);
        setCompany(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setCompany,getValueFromBtn]);
  return (
    <>
      <CompLiContext.Provider 
        value={[ company, setCompany]}>
        {props.children}
      </CompLiContext.Provider>
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
