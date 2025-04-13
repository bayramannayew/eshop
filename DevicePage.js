import React, { useEffect, useState } from "react";
import {Card, Col, Container, Image, Row, Button } from "react-bootstrap";
import star from '../assets/star.jpg'
import {useParams} from 'react-router-dom'
import {  SHOP_ROUTE } from "../utils/consts";
import { fetchOneDevice } from "../http/deviceApi";
import useDeviceStore from "../store/DeviceStore";
import { createOrder } from "../http/deviceApi";
import useUserStore from "../store/UserStore";
import {  useNavigate } from "react-router-dom";





const DevicePage =()=>{
  const {  selectedUser, selectedDevice } = useDeviceStore();
  const [device, setDevice] = useState({info:[]})
  const user = useUserStore((state) => state.user);
  const {id} = useParams()
  const navigate = useNavigate();
  useEffect(()=>{
     fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  
  
  const [value, setValue] = useState('')
  const addOrder = ()=>{
     createOrder({name:device.name , price:device.price, email:user.email, userId:user.id, deviceId:device.id}).then(data =>{
      setValue('')
      return window.location.reload(navigate(SHOP_ROUTE ))  ;
    })
  }
  
 
return(
 <Container className="mt-3">
  <Row>
  <Col md={4}>
<Image width={300} height={300} src={'http://localhost:5000/' + device.img}/>
</Col>
<Col md={4}>
  <Row className="d-flex flex-column align-items-center ">
    <h2>{device.name}</h2>
    <div
    className="d-flex align-items-center justify-content-center"
    style={{background: `url(${star})no-repeat center center`, width:240, height:240, backgroundSize:'cover', fontSize:64 }}
    >
      {device.rating}
    </div>
  </Row>
</Col>
<Col md={4}>
  <Card
  className="d-flex flex-column align-items-center justify-content-around"
  style={{width:300, height:300, fontSize:32, border:'5px solid lightgray'}}
  >
    <h3>{device.price} m</h3>
    <Button variant={"outline-dark"} onClick={addOrder} >Sebede gosh</Button>
   
  </Card>
</Col>
  </Row>
<Row className="d-flex flex-column m-1">
  <h1>Hasiyetnamalar</h1>
  {device.info.map((info, index) =>
    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding:10}}>
      {info.title} : {info.description}
      </Row>
    )}
</Row>
 </Container>
);
};

export default DevicePage;


// amount:device.price