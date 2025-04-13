import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration, check } from "../http/userApi";

import { observer } from "mobx-react-lite";
import useUserStore from "../store/UserStore";




const Auth = observer(() => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
 const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const setUser = useUserStore((state) => state.setUser);
  
 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      check().then((user) => setUser(user));
    }
  }, []);
  
  
 
  const click = async () => {
    let data;
    try {
      
      if (isLogin) {
        data = await login(email, password);
        return window.location.reload(navigate(SHOP_ROUTE))  ;
      } 
      
     
        else {
          data = await registration(email, password)
          return window.location.reload(navigate(SHOP_ROUTE))
      }
      user.setUser(data);

      user.setIsAuth(true);
      
    } catch (e) {
      alert(e.response.data.message);
    }
  };
 
  return (
    
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: (window.innerHeight = 540) }}
    >
      <Card style={{ width: 600 }} className="p-10">
        <h2 className="m-auto">{isLogin ? "Awtorizasiya" : "Registrasiya"}</h2>
        <Form className="d-flex flex-column">
        {error && <p style={{ color: "red" }}>{error}</p>}
          <Form.Control
            className="mt-3"
            placeholder="email salgy giriz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}


            
          />
          <Form.Control
            className="mt-3"
            placeholder="parol giriz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Hasabynyz yokmy?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Agza bolun !</NavLink>
              </div>
            ) : (
              <div>
                Hasabynyz barmy?{" "}
                <NavLink to={LOGIN_ROUTE}>Iceri girin !</NavLink>
              </div>
            )}
          </Row>
          <Button variant={"outline-success"} onClick={click}>
            {isLogin ? "Iceri girin" : "Agza bolun"}
          </Button>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
