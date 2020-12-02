import React, { useState } from 'react';
import { Carousel, Image, Container, Navbar } from 'react-bootstrap'
import test from './test.jpeg'
import profilePic from './newimg.png'
import cityPic from './houston.jpg'
import './Contact.css'
import Footer from '../Footer/Footer';
import NavbarPage from '../Navbar/NavbarPage';


export default function Contact() {

    //-----Carousel Control
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <NavbarPage />
            {/* Info on About Page */}


            <Navbar className="about-navbar" expand="lg" variant="light" bg="primary">
                <Container>
                    <Navbar.Brand href="#about">Our Company</Navbar.Brand>
                    <Navbar.Brand href="#history">History</Navbar.Brand>
                    <Navbar.Brand href="#leadership">Leadership</Navbar.Brand>
                </Container>
            </Navbar>
            <section id="about">
                <h1 className="title">About Mesah</h1>
                <p>Consectetur et consectetur cupidatat occaecat dolor. Eiusmod mollit sunt nulla irure nostrud duis amet ut exercitation dolor incididunt pariatur. Consequat adipisicing do anim sit non anim nostrud non minim ipsum do. Sit exercitation laboris velit incididunt enim sit pariatur magna. Proident in amet sit dolor sit culpa ut est amet nisi labore ea ullamco irure. Ex quis officia reprehenderit reprehenderit cillum sit dolore nostrud.Cillum duis commodo dolor et deserunt duis nulla commodo qui Lorem adipisicing eu dolore. Do incididunt aliquip non cupidatat ullamco eu deserunt officia nostrud eiusmod eu culpa ut. Cillum sunt dolor elit proident cupidatat incididunt velit laboris irure ullamco. In nisi incididunt ullamco mollit aute cillum. Incididunt esse nisi ex velit nisi qui cillum. Lorem fugiat esse veniam reprehenderit id cupidatat elit quis Lorem ullamco sit pariatur nulla anim.</p>
            </section>
            <section id="history">
                <h1 className="title">History</h1>
                <p>Consectetur et consectetur cupidatat occaecat dolor. Eiusmod mollit sunt nulla irure nostrud duis amet ut exercitation dolor incididunt pariatur. Consequat adipisicing do anim sit non anim nostrud non minim ipsum do. Sit exercitation laboris velit incididunt enim sit pariatur magna. Proident in amet sit dolor sit culpa ut est amet nisi labore ea ullamco irure. Ex quis officia reprehenderit reprehenderit cillum sit dolore nostrud.</p>
            </section>

            <section>
                <div className="container">
                    <h1 className="heading">Meet the Team</h1>
                    <div className="card-wrapper">
                        <div className="card">
                            <img src={cityPic} alt="houston city" className="card-img" />
                            <img src={profilePic} alt="profile pic" className="profile-img" />
                            <h1>Derek James</h1>
                            <p className="job-title">TAAB</p>
                            <p className="about">Velit occaecat ea cillum cillum amet non. Ad laborum tempor cillum id nostrud minim dolor incididunt velit pariatur. Tempor tempor dolor amet consequat magna ad minim excepteur.</p>
                            <a href="https://www.linkedin.com/company/mesah-commissioning-inc/about/" class="btn">Contact</a>
                            <ul class="social-media">
                                <li><a href="https://www.linkedin.com/company/mesah-commissioning-inc/about/"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="mailto:derekjames1093@gmail.com"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <div className="card">
                            <img src={cityPic} alt="houston city" className="card-img" />
                            <img src={profilePic} alt="profile pic" className="profile-img" />
                            <h1>Derek James</h1>
                            <p className="job-title">TAAB</p>
                            <p className="about">Velit occaecat ea cillum cillum amet non. Ad laborum tempor cillum id nostrud minim dolor incididunt velit pariatur. Tempor tempor dolor amet consequat magna ad minim excepteur.</p>
                            <a href="https://www.linkedin.com/company/mesah-commissioning-inc/about/" class="btn">Contact</a>
                            <ul class="social-media">
                                <li><a href="https://www.linkedin.com/company/mesah-commissioning-inc/about/"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="mailto:derekjames1093@gmail.com"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                        <div className="card">
                            <img src={cityPic} alt="houston city" className="card-img" />
                            <img src={profilePic} alt="profile pic" className="profile-img" />
                            <h1>Derek James</h1>
                            <p className="job-title">TAAB</p>
                            <p className="about">Velit occaecat ea cillum cillum amet non. Ad laborum tempor cillum id nostrud minim dolor incididunt velit pariatur. Tempor tempor dolor amet consequat magna ad minim excepteur.</p>
                            <a href="https://www.linkedin.com/company/mesah-commissioning-inc/about/" class="btn">Contact</a>
                            <ul class="social-media">
                                <li><a href="https://www.linkedin.com/company/mesah-commissioning-inc/about/"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="mailto:derekjames1093@gmail.com"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>



                    </div>
                </div>
            </section>




            <Footer />



        </>
    )
}
