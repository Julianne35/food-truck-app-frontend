import CompNameMobile from "./CompNameMobile";

const CompNameFilterMobile = ({ filtered }) => {
    const name = filtered.map((res) => (
        <CompNameMobile
          key={res.id}
          company={res.company}
        />
    ));
    return<>{name[0]}</>;
};
export default CompNameFilterMobile;