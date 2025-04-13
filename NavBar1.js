import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {  LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, BASKET_ROUTE } from "../utils/consts";
// import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { fetchOneBasket } from "../http/deviceApi";
import { useParams } from "react-router-dom";
import useUserStore from "../store/UserStore";
import useDeviceStore from "../store/DeviceStore";
const NavBar1 = observer(() => {
  const user = useUserStore((state) => state.user);
  const {  isAuth, setUser, setIsAuth } = useUserStore();
  const { types, setSelectedType } = useDeviceStore();
  const { users, setSelectedUser } = useDeviceStore();

  const navigate = useNavigate();
  const logOut = () => {
    setUser({});
    setIsAuth(false);
  };

  
  
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          key={expand}
          expand={expand}
          className="me-auto my-2 my-lg-0"
        >
          <Container fluid>
            <Navbar.Brand href="#">Sanly Gollanma</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              bg="dark"
              data-bs-theme="dark"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="gap-3">
                {isAuth ? (
                  <Nav className="me-auto my-2 my-lg-0">
                     
                   

                    <Button 
                      variant={"outline-light"}
                      // onClick={() => logOut()}
                      className="ml-4"
                      
                    >
                      {user.email}
                    </Button>
                    <Button
                      variant={"outline-light"}
                      onClick={() => logOut()}
                      className="ml-4"
                    >
                      Cykmak
                    </Button>
                    <Button
                      variant={"outline-light"}
                      onClick={() => navigate(BASKET_ROUTE)}
                        key={user.id}
                      
                       
                      className="ml-4"
                    >
                      Hasabym
                    </Button>
                    <Button
                      variant={"outline-dark"}
                      
                       
                    >
                       {user?.role === "ADMIN" && <div onClick={() => navigate(ADMIN_ROUTE)}>Admin Panel</div>}
                    </Button>
                  </Nav>
                ) : (
                  <Button
                    variant={"outline-light"}
                    onClick={() => navigate(LOGIN_ROUTE)}
                  >
                    Awtorizasiya
                  </Button>

                )}
                <Button
                  variant={"outline-primary"}
                  style={{ color: "white" }}
                  onClick={() => navigate(SHOP_ROUTE)}
                >
                  Esasy sahypa
                </Button>

                <Dropdown>
                  <Dropdown.Toggle
                    variant={"outline-primary"}
                    style={{ color: "white" }}
                  >
                    Bölümler
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {types.map((type) => (
                      <Dropdown.Item
                        onClick={() => setSelectedType(type)}
                        key={type.id}
                      >
                        {type.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Button
                  variant={"outline-primary"}
                  style={{ color: "white" }}
                  onClick={() => navigate(SHOP_ROUTE)}
                >
                  Habarlaşmak
                </Button>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Gözleg sözi giriziň"
                    className="ml-auto"
                    aria-label="Search"
                  />
                  <Button variant="outline-primary" style={{ color: "white" }}>
                    Gözleg
                  </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
});

export default NavBar1;
