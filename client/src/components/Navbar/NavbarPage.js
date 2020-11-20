import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom'
import logo from '../Mesah Logo 1 v2.png';
import '../Navbar.css'
import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from '../../redux/action/profile';

export default function NavbarPage() {
    const [click, setClick] = useState(false); //This is the useState
    const [button, setButton] = useState(true);
    const dispatch = useDispatch()
    const history = useHistory()
    //todo research
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

    const handleLogout = (e) => {
        e.preventDefault()
        fetch('/api/login/logout', {
            method: 'POST',
            body: JSON.stringify({
                password:null,
                email:null
            }),
            headers: {
                Accept:"application/json",
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
                alert(data.error)
            }else{
                alert('Logged Out!')
                dispatch(ActionCreators.logout(data.user))
                let path = '/login'
                history.push(path)
            }
        })
    }

    window.addEventListener('resize', showButton)
    return (
        <>
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
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className='nav-links'>
                                Contact Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {user ? (
                        <>
                        <li className="nav-item">
                        <Link to='/hub' className="nav-links"  onClick={closeMobileMenu}>
                        {button && <Button buttonStyle='btn--outline'>Main Hub</Button>}
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to='/login' className="nav-links"  onClick={closeMobileMenu}>
                        {button && <Button buttonStyle='btn--outline' type="submit" onClick={handleLogout}>Sign Out</Button>}
                        </Link>
                        </li>
                        </>
                    ) : (
                    <Link to='/login'  onClick={closeMobileMenu}>
                        {button && <Button buttonStyle='btn--outline'>EMPLOYEES</Button>}
                    </Link>

                    )}
                </div>
            </nav>
        </>
    )
}

