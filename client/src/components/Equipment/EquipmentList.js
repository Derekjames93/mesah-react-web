import React, { useEffect, useState } from 'react'
import { Button, Container, ListGroup, ListGroupItem, Modal } from 'react-bootstrap'

export default function EquipmentList() {
    const [equipments, setEquipment] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        fetch('api/equipment')
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                setEquipment(data)
            })
    }, [])
    return (
        <div>
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
                    <div key={equipment.id}>
                        <Container>
                            <ListGroup>
                                <ListGroupItem active>Owner:{equipment.owner}</ListGroupItem>
                                <ListGroupItem>Equipment Name:{equipment.name}</ListGroupItem>
                                <ListGroupItem>Model#{equipment.model}</ListGroupItem>
                                <ListGroupItem>Serial#{equipment.serial}</ListGroupItem>
                                <ListGroupItem>Calibration Date:{equipment.calibration}</ListGroupItem>
                                <ListGroupItem>Due Date:{equipment.due}</ListGroupItem>
                            </ListGroup>
                            <br></br>
                            <br></br>
                        </Container>

                    </div>
                    </>
                )
            })
            }</Modal.Body>
            
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
