import React, { useState,useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";



const Admin =()=>{
const [brandVisible, setBrandVisible] = useState(false)
const [typeVisible, setTypeVisible] = useState(false)
const [deviceVisible, setDeviceVisible] = useState(false)



  

  

  
  

return(
 <Container className="d-flex flex-column">
  
  <Button 
  variant={"outline-dark"} 
  className="mt-4 p-2"
  onClick={()=>setTypeVisible(true)}
  >

    Täze okuw sapagyny goşmak
    </Button>
  <Button 
  variant={"outline-dark"} 
  className="mt-4 p-2"
  onClick={()=>setBrandVisible(true)}
  >

   Täze okuw sapagynyň derejesini goshmak
    </Button>
  <Button 
  variant={"outline-dark"} 
  className="mt-4 p-2"
  onClick={()=>setDeviceVisible(true)}
  >

    Okuwlar goshmak
    </Button>
    <CreateBrand show={brandVisible} onHide={()=> setBrandVisible(false)}/>
    <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
    <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
    
 </Container>
);
};

export default Admin;