import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Link} from 'react-bootstrap';


export default class Navbar2 extends Component {

    render() {
      return (
  
  
          <Navbar bg="white" expand="xl">
              <Navbar.Brand href="#home"> <img alt="" src="P2PLogo.png"width="30"height="30"className="d-inline-block align-top"/>  Plan To Plate</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                
                  <Nav className="mr-auto">
                      <Nav.Link href="#home">App</Nav.Link>
                      <NavDropdown title="Inventory" id="basic-nav-dropdown">
                          <NavDropdown.Item Link to="/foods" className="nav-link">Food Inventory</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Recipe Inventory</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
              
          </Navbar>
  
        
      );
    }
  }



