
import React, { useState } from 'react';

import { Carousel, Image, Container, Navbar } from 'react-bootstrap'
import test from './test.jpeg'

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
                <section id="leadership">
                <div className="beta">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <div style={{width: '13rem'}}>
                            <Image src={test} roundedCircle fluid/>
                        </div>
                            
                        
                        <Carousel.Caption>
                            <h3>Insert Name Here</h3>
                            <p>Id ullamco Lorem commodo nulla. Sit anim officia nostrud dolore laborum consectetur dolore irure. Ipsum duis eu eiusmod deserunt anim laborum. Ullamco veniam commodo adipisicing adipisicing amet eiusmod quis Lorem nisi minim anim et. Sunt voluptate non tempor et elit dolore.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{width: '13rem'}}>
                            <Image src={test} roundedCircle fluid/>
                        </div>
                        <Carousel.Caption>
                            <h3>Insert Name Here</h3>
                            <p>Id ullamco Lorem commodo nulla. Sit anim officia nostrud dolore laborum consectetur dolore irure. Ipsum duis eu eiusmod deserunt anim laborum. Ullamco veniam commodo adipisicing adipisicing amet eiusmod quis Lorem nisi minim anim et. Sunt voluptate non tempor et elit dolore.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{width: '13rem'}}>
                            <Image src={test} roundedCircle fluid/>
                        </div>
                        <Carousel.Caption>
                            <h3>Insert Name Here</h3>
                            <p>Id ullamco Lorem commodo nulla. Sit anim officia nostrud dolore laborum consectetur dolore irure. Ipsum duis eu eiusmod deserunt anim laborum. Ullamco veniam commodo adipisicing adipisicing amet eiusmod quis Lorem nisi minim anim et. Sunt voluptate non tempor et elit dolore.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
                </section>
            

            <Footer />



        </>
    )
}
