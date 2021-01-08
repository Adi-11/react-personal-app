import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        position:fixed;
        top:0;
        width:100%;
        letter-spacing: 5px;
        background-color:#3D3434;
        z-index:1;
    }
    .navbar-brand{
        padding-left : 3%;
        font-weight : 1 rem;
        font-family: sans-serif;      //font family
    }
    .nav-link{
        font-size: 0.25 rem;
        &:hover {
            color: #fff;
        }
    }
`

const FooterStyle = styled.div`
    .navbar{
        position:fixed;
        width: 100%;
        bottom :0;
        background-color:#AAA4A4; 
        z-index:1;
        margin-top:10%;
        height: 7%;
    }
        
`
const NavComponent = () => {
    const navBrand = 'Ritu Raj Raushan';
    return (
        <div>
            <Styles>
                <Navbar variant="dark" expand="lg">
                    <Navbar.Brand href="/">{navBrand}</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {sessionStorage.getItem("username") && <Nav.Link href="/adddata">Add</Nav.Link>}
                            <Nav.Link href="/about">About</Nav.Link>
                            {sessionStorage.getItem("username") && <Nav.Link onClick={() => {
                                sessionStorage.clear()
                                window.location.assign("/");
                            }}>
                                Logout
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles>
            <Footer />
        </div>
    )
}

const Footer = () => {
    return (
        <FooterStyle>
            <Navbar>
                <Nav className="ml-auto">
                    <Nav.Link href="/adminlogin">
                        <h6>a1pha</h6>
                    </Nav.Link>
                </Nav>
            </Navbar>
        </FooterStyle>
    )
}

export default NavComponent;






