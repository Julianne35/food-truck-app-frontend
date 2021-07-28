import EmpCompName from "./EmpCompName";

const EmpCompNameFilter = ({ filtered }) => {
  const name = filtered.map((res) =>
      <EmpCompName key={res.id} company={res.company} />
  );
  return <>{name[0]}</>;
};
export default EmpCompNameFilter;
