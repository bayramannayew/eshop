import React from "react";
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.jpg'
import {useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem=({device})=>{
    const navigate = useNavigate()
    return(
        <Col md={3} className={"mt-3"} onClick={()=>navigate(DEVICE_ROUTE+ '/' + device.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={"light"}>
             <Image width={150} height={150} src={'http://localhost:5000/' + device.img} />
             <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
               
                <div className="d-flex align-items ">
                    <div>{device.rating}</div>
                    <Image style={{width:30, height:30}} src={star} />
                   
                </div>
             </div>
             <div>{device.name}</div>
            </Card>
            
        </Col>
    )
}

export default DeviceItem;