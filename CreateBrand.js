import React, { useState }  from "react";
import  Modal  from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createBrand } from "../../http/deviceApi";
const CreateBrand = ({show, onHide})=>{
  const [value, setValue] = useState('')
  const addBrand = ()=>{
     createBrand({name:value}).then(data =>{
      setValue('')
      onHide( )
    })
  }
    return(
        <Modal
        show={show}
        onHide={onHide}
          size="lg"
         
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Derejeler goshmak
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Control
               value={value}
               onChange={e => setValue(e.target.value)}
      placeholder={"Okuw sapagynyň derejesiniň adyny giriz"}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Yapmak</Button>
            <Button variant="outline-success" onClick={addBrand}>Goshmak</Button>
          </Modal.Footer>
        </Modal>
    )
}
export default CreateBrand