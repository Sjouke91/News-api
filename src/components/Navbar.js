import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation({ searchTextSetter }) {
  const [searchText, set_searchText] = useState("");
  const handleSearch = () => {
    searchTextSetter(searchText);
  };

  return (
    <Navbar style={{ height: "6vh" }} bg="warning" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        News Api
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/about">
          About
        </Nav.Link>
        <Nav.Link as={NavLink} to="/pricing">
          Pricing
        </Nav.Link>
      </Nav>

      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={(e) => set_searchText(e.target.value)}
        />
        <Dropdown onClick={(e) => console.log(e.target.text)}>
          <Dropdown.Toggle
            variant="warning"
            id="dropdown-basic"
          ></Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" eventKey="title">
              Title
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" eventKey="author">
              Author
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" eventKey="source">
              Source
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="outline-secundary" onClick={() => handleSearch()}>
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
