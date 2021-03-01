import React, { useEffect, useState } from 'react'
import {  Form } from 'react-bootstrap'
import NavbarPage from '../Navbar/NavbarPage';
import EquipmentList from './EquipmentList';

export default function Equipment() {
    const [equipments, setEquipment] = useState([])
    // const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [serial, setSerial] = useState('')
    const [calibration, setCalibration] = useState('')
    const [due, setDue] = useState('')
    const [owner, setOwner] = useState('')

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
        <NavbarPage />
        <div className="equipment-register">
            <Form onSubmit={handleFormSubmit}>
                <Form.Label>Equipment name</Form.Label>
                <Form.Control value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Equipment Name"></Form.Control>
                <Form.Label>Equipment model</Form.Label>
                <Form.Control value={model} onChange={(e) => {setModel(e.target.value)}} placeholder="Model Number"></Form.Control>
                <Form.Label>Equipment serial</Form.Label>
                <Form.Control value={serial} onChange={(e) => {setSerial(e.target.value)}} placeholder="Serial Number"></Form.Control>
                <Form.Label>Equipment calibration</Form.Label>
                <Form.Control value={calibration} type="date" onChange={(e) => {setCalibration(e.target.value)}} placeholder="Calibration Date"></Form.Control>
                <Form.Label>Equipment due date</Form.Label>
                <Form.Control value={due} type="date" onChange={(e) => {setDue(e.target.value)}} placeholder="Due Date"></Form.Control>
                <Form.Label>Equipment owner</Form.Label>
                <Form.Control value={owner} onChange={(e) => {setOwner(e.target.value)}} placeholder="Equipment Owner"></Form.Control>
                <button type='submit'>Submit</button>
            </Form>
        </div>
        <br></br>
            <EquipmentList />
        </>

        

    )
}
