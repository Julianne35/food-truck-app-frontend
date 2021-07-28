import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const CompDetailsContext = createContext();

export const CompListProvider = (props) => {
  const [getValueFromBtn] = useState("");

  const [company, setCompany] = useState([]);
  const [balance, setBalance] = useState([]);

  useEffect(() => {
     axios
      .get(`http://localhost:5000/get-snapshot-test/${getValueFromBtn}`)
      .then((res) => {
        console.log("Company:", res.data);
        setCompany(res.data);
        setBalance(res.data.balance.toFixed(2));
      })
      .catch((err) => {
        console.log(err);
      });

  }, [setCompany, getValueFromBtn, setBalance]);

  return (
    <>
      <CompDetailsContext.Provider 
        value={[ company, setCompany, balance, setBalance ]}>
        {props.children}
      </CompDetailsContext.Provider>
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
