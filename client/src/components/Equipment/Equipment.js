import React, { useEffect, useState } from 'react'
import { Accordion, Card, Button, Modal, Container, ListGroup, ListGroupItem } from 'react-bootstrap'
import NavbarPage from '../Navbar/NavbarPage';

export default function Equipment() {
    const [equipments, setEquipment] = useState([])
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [serial, setSerial] = useState('')
    const [calibration, setCalibration] = useState('')
    const [due, setDue] = useState('')
    const [owner, setOwner] = useState('')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = (e) => {
        fetch('api/equipment', {
            method: 'POST',
            body: JSON.stringify({
                name,
                model,
                serial,
                calibration,
                due,
                owner
            }),
            headers: {
                Accept: "application/json",
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                alert(data.error)
            }else{
                alert('Equipment success')
            }
        })
    }

    useEffect(() => {
        fetch('api/equipment')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setEquipment(data)
            })
    }, [])


    return (
        <>
        <div className="equipment-register">
            <form className="equipment-form" onSubmit={handleFormSubmit}>
                <label>Equipment name</label>
                <input value={name} onChange={(e) => {setName(e.target.value)}}></input>
                <label>Equipment model</label>
                <input value={model} onChange={(e) => {setModel(e.target.value)}}></input>
                <label>Equipment serial</label>
                <input value={serial} onChange={(e) => {setSerial(e.target.value)}}></input>
                <label>Equipment calibration</label>
                <input value={calibration} onChange={(e) => {setCalibration(e.target.value)}}></input>
                <label>Equipment due date</label>
                <input value={due} onChange={(e) => {setDue(e.target.value)}}></input>
                <label>Equipment owner</label>
                <input value={owner} onChange={(e) => {setOwner(e.target.value)}}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
            <Button variant="primary" onClick={handleShow} size="lg" block>
                Equipment List
            </Button>

            <Modal show={show} onHide={handleClose} size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>{equipments.map((equipment) => {
                console.log(equipment)
                return (
                    <>
                        <Container>
                            <ListGroup>
                                <ListGroupItem>{equipment.owner}</ListGroupItem>
                                <ListGroupItem>{equipment.name}</ListGroupItem>
                                <ListGroupItem>{equipment.model}</ListGroupItem>
                                <ListGroupItem>{equipment.serial}</ListGroupItem>
                                <ListGroupItem>{equipment.calibration}</ListGroupItem>
                                <ListGroupItem>{equipment.due}</ListGroupItem>
                            </ListGroup>
                        </Container>
                    </>
                )
            })
            }</Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>

        

    )
}
