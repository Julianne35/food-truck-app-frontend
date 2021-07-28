import Results from "./Results";

const CompDetails = ({ filtered }) => {
  const list = filtered.map((result) =>
    result.details.map((inner) => (
      <Results
        key={inner.id}
        employee={inner.employee}
        date={inner.date}
        tax={inner.tax}
        balance={inner.balance}
      />
    ))
  );

  return <>{list}</>;
};
export default CompDetails;

// import Results from "./Results";
// import React, { useContext } from "react";

// const CompanyInfoList = ({ filtered }) => {
//     const fltr = filtered.map((result) =>
//     result.result((sub) => (
//       <Results
//         key={sub.id}
//         // company={result.company}
//         employee={sub.employee}
//         date={sub.date}
//         tax={sub.tax}
//         balance={sub.balance}
//       />
//     ))
//   );
//   return <>{fltr}</>;
// };
// export default CompanyInfoList;
