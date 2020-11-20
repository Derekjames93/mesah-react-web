import React, { useState, useEffect } from 'react';
import { Breadcrumb, Card, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'
import logo from '../Mesah Logo 1 v2.png';
import '../Navbar.css'
import './Hub.css'
import test from '../Contact/test.jpeg'
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Jumbotron } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from '../../redux/action/profile';
import BioForm from './BioForm';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


export default function NavbarPage() {
    const [click, setClick] = useState(false); //This is the useState
    const [button, setButton] = useState(true);
    const [bio, setBio] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.user.profile)

    // Two var are click and setClick 
    const handleClick = () => setClick(!click);
    //whenever click is clicked will set useState to true
    const closeMobileMenu = () => setClick(false);

    // Removes button and displays depending on screen size
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [])
    //todo fix UseEffect


    const handleLogout = (e) => {
        e.preventDefault()
        fetch('/api/login/logout', {
            method: 'POST',
            body: JSON.stringify({
                password: null,
                email: null
            }),
            headers: {
                Accept: "application/json",
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    alert('Logged Out!')
                    dispatch(ActionCreators.logout(data.user))
                    let path = '/login'
                    history.push(path)
                }
            })
    }

    const handleBio = (e) => {
        e.preventDefault()
        fetch('/api/users/hub', {
            method: 'PUT',
            body: JSON.stringify({
                bio: bio
            }),
            headers: {
                Accept: "application/json",
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(ActionCreators.login(data))
            })
    }

    window.addEventListener('resize', showButton)
    return (
        <>
            {user ? (
                <>
                    <div className="hub-html">


                        <nav className="navbar">
                            <div className="navbar-container">
                                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                                    <span> Mesah Comm Inc. </span>
                                    <img src={logo} alt="logo" className="img-responsive"></img>
                                </Link>
                                <div className="menu-icon" onClick={handleClick}>
                                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                                </div>
                                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                                </ul>
                                <Link to='/login' onClick={closeMobileMenu}>
                                    {button && <Button buttonStyle='btn--outline' type="submit" onClick={handleLogout}>LOGOUT</Button>}
                                </Link>
                            </div>
                        </nav>

                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                Calendar
                </Breadcrumb.Item>
                            <Breadcrumb.Item active>Email</Breadcrumb.Item>
                        </Breadcrumb>
                        <Container>
                            <div className="card-container">
                                <div className="upper-container">
                                    <div className="image-container">
                                        <img src={user.profileImage} />
                                    </div>
                                </div>
                                <div className="lower-container">
                                    <div>
                                        <h3>{user.name}</h3>
                                        <hr className="hr-hub"></hr>
                                        <h4>Job Title: {user.jobTitle}</h4>
                                        <hr className="hr-hub"></hr>
                                    </div>
                                    <div className="bio-text">
                                        <p> {user.bio}</p>
                                    </div>
                                    <div>
                                    <Button variant="primary" onClick={handleShow}>
                                    Click to Add Bio
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Update Bio!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><Form onSubmit={handleBio}>
                                <Form.Group controlId="bio">
                                    <Form.Label>Update Bio</Form.Label>
                                    <Form.Control label="bio" name="bio" type="textArea" value={bio} onChange={(e) => { setBio(e.target.value) }}></Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit"> Submit</Button>
                            </Form></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                    </div>


                                </div>

                            </div>
                            <>
                            </>
                        </Container>

                        <Footer />
                    </div>
                </>
            ) : (
                    <Link to='/login'>
                        {button && <Button buttonStyle='btn--outline'>EMPLOYEES</Button>}
                    </Link>
                )}

        </>
    )
}

