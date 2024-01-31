import React from "react";
import { Navbar,Container,Nav,Row,Col} from "react-bootstrap";


const navbar = () => {
    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row>
            <Col md={6} sm={12}> 
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            </Col>
            <Col md={6} sm={12} className="d-flex justify-content-center">
                <div className="d-flex justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
                </div>
            </Col>
        </Row>
      </Container>
    </Navbar>
    <div class="d-flex flex-column mb-3">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>
<div class="d-flex flex-column-reverse">
  <div class="p-2">Flex item 1</div>
  <div class="p-2">Flex item 2</div>
  <div class="p-2">Flex item 3</div>
</div>
        </div>
    );
};

export default navbar ;