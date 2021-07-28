import CompName from "./CompName";

const CompNameList = ({ filtered }) => {
    const name = filtered.map((res, i) => (
        <CompName
          key={i}
          company={res.company}
        />
    ));
    return<>{name[0]}</>;
};
export default CompNameList;