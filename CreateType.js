import React, { useState }  from "react";
import  Modal  from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createType } from "../../http/deviceApi";

const CreateType = ({show, onHide})=>{
  const [value, setValue] = useState('')
  const addType = ()=>{
     createType({name:value}).then(data =>{
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
            Täze okuw sapagyny goşmak
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
    placeholder={"Täze okuw sapagynyň adyny giriz"}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Yapmak</Button>
          <Button variant="outline-success" onClick={addType}>Goshmak</Button>
        </Modal.Footer>
      </Modal>
    )
}
export default CreateType