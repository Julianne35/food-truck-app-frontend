import Button from 'react-bootstrap/Button';
import style from "./Success.module.css";

const SuccessDetails = ({employee, balance, notes, company, employeeId, _id}) => {
  //map tp find obj id
  const id = _id.map((i) => i)
  console.log("id",id)
  //match http obj id with maped array
  const found = id.find(el => el === employeeId)
  console.log("found", found)
  //find index of mapped obj id
  const i = id.findIndex(i => i === found);
  console.log("index", i)

     return(
     <>
        {balance === "0.00" && <h4 className="text-success">{employee} is paid in full.</h4>} 
        {balance !== "0.00" && <h4>{employee[i]} new balance: ${balance[i]}</h4>} 

       <div className="mb-4 pb-4 text-secondary">
       { notes !== "" &&<h5>Notes: {notes[i]}</h5>}
       { notes === "" &&<h5>Notes: No notes at this time</h5>}
      </div>
      <div className="mb-2">
        <Button className={style["continue-btn"]} href="/search-comp-details">
          Continue seraching {company}
        </Button>
      </div>
      </>
      )
}
export default SuccessDetails;

// import Button from 'react-bootstrap/Button';
// import style from "./Success.module.css";

// const SuccessDetails = ({employee, balance, notes, company}) => {

//     return(
//      <>
//      {employee.map((emp,  index, employeeId) => (
        
//         // eslint-disable-next-line no-sequences
//         balance === "0.00" && <h4 className="text-success">{emp} is paid in full.</h4>, 
//         balance !== "0.00" && <h4>{emp} new balance: ${balance[index]}</h4>
//      ))}
//       {notes.map((note, index) => (
//        <div className="mb-4 pb-4 text-secondary">
//        { notes !== "" &&<h5>Notes: {notes[index]} </h5>}
//        { notes === "" &&<h5>Notes: No notes at this time</h5>}
//       </div>
//       ))}
//       <div className="mb-2">
//         <Button className={style["continue-btn"]} href="/search-comp-details">
//           Continue seraching {company}
//         </Button>
//       </div>
//       </>
//       )
// }
// export default SuccessDetails;