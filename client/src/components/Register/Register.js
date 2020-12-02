import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import NavbarPage from '../Navbar/NavbarPage'
import './Register.css'
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'


export default function Register(props) {
    // const route = '/api/users'
    const [account, setAccount] = useState(null)
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [profileImage, setProfileImage] = useState('')
    const history = useHistory();
    const formData = new FormData();
    
    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(profileImage)
        formData.append('name',name)
        formData.append('password',password)
        formData.append('email',email)
        formData.append('jobTitle',jobTitle)
        formData.append('profileImage',profileImage)
        
        console.log(profileImage)
        fetch('/api/users', {
            method: 'POST',
            body:formData,
        
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert('Account created!')
            let path = '/login'
            history.push(path)
        })
    }

    useEffect(() => {
        fetch('/api/users')
        .then(res => res.json())
        .then(data => {
            setAccount(data)
        })
    },[])


    return (
        <>
            <NavbarPage />

            <div className="register-form">

            <Form id="newAccountCreate" className="sign-up-form" onSubmit={handleFormSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <h1> Sign up Now</h1>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="input-box" label="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="input-box" type="password" label="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className="input-box" type="name" label="name" value={name} onChange={(e) => {setName(e.target.value)}} required placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formJobName">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control className="input-box" type="jobTitle" label="jobTitle" value={jobTitle} onChange={(e) => {setJobTitle(e.target.value)}} required placeholder="Job Title" />
                </Form.Group>
                <Form.Group controlId="profileImage">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control className="input-box" type="file" label="profileImage" name='profileImage' onChange={(e) => {setProfileImage(e.target.files[0])}} placeholder="Job Title" />
                </Form.Group>
                <hr className="hr-form"></hr>
                <p className="or">OR</p>
                <Form.Group controlId="formJobName">
                    <Form.Label>Do you have an account? <Link to="/login">Login</Link></Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit" className="sign-btn"> Submit</Button>
            </Form>
            </div>
            <Footer />
                    


        </>
    )
}
