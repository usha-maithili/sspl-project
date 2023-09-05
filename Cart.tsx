import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem, Table } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import the Bootstrap Icons CSS
import nokia from './photos/nokia.jpeg';
import motorila from './photos/motorila.jpeg';
export const Cart = () => {
  return (
    <div>
      <Navbar bg="gradient" className=' navbar-expand-sm' >
        <NavItem style={{fontSize:"25px"}} >Cart</NavItem>
        
            <i className="bi bi-cart-fill" style={{ fontSize: '24px' }}></i>
          
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className= "container  ps-5 ms-5">
           
          <NavDropdown title="Mobile" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Nokia 3310</NavDropdown.Item>
              <NavDropdown.Item href="#">Motorola Razr V3</NavDropdown.Item>
              <NavDropdown.Item href="#">BlackBerry 8700</NavDropdown.Item>
              <NavDropdown.Item href="#">others</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="laptop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">IBM ThinkPad 700C</NavDropdown.Item>
              <NavDropdown.Item href="#">Apple PowerBook G3</NavDropdown.Item>
              <NavDropdown.Item href="#">Dell Latitude C640</NavDropdown.Item>
              <NavDropdown.Item href="#">others</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
      <div style={{ marginTop: '20px' }}>
      <Table striped bordered style={{ tableLayout: 'fixed' }}>
          <thead>
            <tr>
              <th className="col">Product</th>
              <th className="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: '50px' }}>
              <td> <img src={nokia}  height="auto" alt="Product Image" width="auto"   /> </td>
              
              <td>
             <p style={{ fontSize: '18px' }}>ItemName = Nokia <br/></p>
             <p style={{ fontSize: '18px' }}>   Price = 111 ₹<br/></p>
             <p style={{ fontSize: '18px' }}>   Shipping = 111 ₹<br/></p>
              <p style={{ fontSize: '18px' }} > tax = 111 ₹ <br/></p>
              <p style={{ fontSize: '18px' }} > total = 333 ₹<br/></p>
   <button className="btn btn-primary">Checkout</button>
  </td>
            </tr>
            <tr style={{ height: '50px' }}>
            <td> <img src={motorila}  height="auto" alt="Product Image" width="auto"   /> </td>
              
              <td>
             <p style={{ fontSize: '18px' }}>ItemName = Motorila <br/></p>
             <p style={{ fontSize: '18px' }}>   Price = 111 ₹<br/></p>
             <p style={{ fontSize: '18px' }}>   Shipping = 111 ₹<br/></p>
              <p style={{ fontSize: '18px' }} > tax = 111 ₹ <br/></p>
              <p style={{ fontSize: '18px' }} > total = 333 ₹<br/></p>
   <button className="btn btn-primary">Checkout</button>
  </td>

</tr>
           
              
            </tbody>
          </Table>
      </div>
    </div>
  );
};

//export default HomePage;
