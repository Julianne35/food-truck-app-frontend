import Button from "react-bootstrap/Button";

const MainButton = (props) => {
  return <Button className={props.cName}>{props.children}</Button>;
};
export default MainButton;
