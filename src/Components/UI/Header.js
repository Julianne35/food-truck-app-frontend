import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import style from "../UI/Header.module.css";

const Header = () => {
  return (
    <>
      <Navbar className={style["header-navbar"]} expand="lg">
        <Navbar.Brand className="text-light" href="/">
            Sunrise Credit App
        </Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className={style["header--link"]} href="#action1">
              Companies
            </Nav.Link>
            <Nav.Link className={style["header--link"]} href="#action2">
              Employees
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="light">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
