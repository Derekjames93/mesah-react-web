import React, { useState } from 'react'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarPage from '../Navbar/NavbarPage'
import { useDispatch } from 'react-redux'
import { ActionCreators } from '../../redux/action/profile'
import './login.css'

export default function Login() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory();
    const dispatch = useDispatch()

    

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                password:password,
                email:email

            }),
            headers: {
                Accept:"application/json",
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                alert(data.error)
            }else{
                alert('Logged In Successfully')
                dispatch(ActionCreators.login(data.user))
                let path = '/hub';
                history.push(path)
            }
        })
    }


    return (
        <>
            <NavbarPage />

            <div className="sign-in-form">

            <Form id="loginAccount" onSubmit={handleLogin} className="sign-up-form">
                <h1> Log In</h1>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
            </Form.Label>
                    <Col sm="10">
                        <Form.Control className="input-box" value={email} onChange={(e) => {setEmail(e.target.value)}} required label='email' plaintext placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control className="input-box"  onChange={(e) => {setPassword(e.target.value)}} required value={password} label='password' type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <hr className="hr-form"></hr>
                <p className="or">OR</p>
                <Form.Group controlId="formJobName">
                    <Form.Label>Do you need to create a Account?<Link to="/register">Login</Link></Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" className="sign-btn"> Login</Button>
            </Form>

            </div>
            <Footer />
        </>
    )
}
