import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import CompInfoDetails from "./CompInfoDetails";

const GeneralInfo = ({address, phone}) => {
    return(<>
    <Row>
        <Col>"CompanyName"</Col>
        <Button>Edit</Button>
        <Button>Delete</Button>
    </Row>
    <Row>
        <Col><h3>General Information</h3></Col>
        <Col>Address: "AdressInfo"</Col>
        <Col>Phone: "PhoneInfo</Col>
    </Row>
    <Row>
        <Col><h3>Employees</h3></Col>
    </Row>
    <Row>
        <Col>Name: "EmployeeName"
        <Button>Add Balance</Button>
        <Button>View</Button>
        </Col>
    </Row>
    <Row>
        <Col> <FormControl as="textarea" rows={3} /></Col>
    </Row>
    <Button>Exit Customer</Button>
    </>);
}
export default GeneralInfo;