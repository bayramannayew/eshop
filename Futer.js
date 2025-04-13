import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
const Futer = () => {
  return (
    <div className="con">

   
    <footer className="full footer fixed-bottom">
      <Container >
        <Row className="text-center text-md-start">
          
          <Col xs={12} md={4} className="mb-1">
            <h5>Sanly Gollanma</h5>
            <p>Sanly ulgamdaky elektron okuw platformasy</p>
          </Col>

          <Col xs={12} md={4} className="mb-3">
            <h5>Salgymyz</h5>
            <p>
              <i className="bi bi-geo-alt me-2"></i> Mary welaýaty, Mary şäheri
            </p>
          </Col>
         
          <Col xs={12} md={4} className="mb-3">
            <h5>Habarlaşmak üçin:</h5>
            <p>
              <i className="bi bi-telephone me-2"></i> +993 62 18 40 74
            </p>
            <p>
              <i className="bi bi-envelope me-2"></i> sanlygollanma@gmail.com
            </p>
           
          </Col>
        </Row>

        <hr className="bg-light" />

        {/* Нижний блок с копирайтом */}
        <Row>
          <Col className="text-center">
            <p className="mb-0">© 2025 Hemme hukuklar goragly.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Futer;
