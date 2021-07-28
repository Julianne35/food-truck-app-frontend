import CompName from "./CompName";

const CompNameFilter = ({ filtered }) => {
    const name = filtered.map((res) => (
        <CompName
          key={res.id}
          company={res.company}
        />
    ));
    return<>{name[0]}</>;
};
export default CompNameFilter;