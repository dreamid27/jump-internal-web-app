import React from 'react';
import { Link } from 'react-router-dom';
import Container, { HeadNav, ListNav, Logo } from './Styles';
import logo from '../../images/d.png';
import { Users, User, House, Ticket } from 'phosphor-react';

const NavBar = () => {
    return (
        <Container>
            <HeadNav>
                <Logo>
                    <img src={logo} alt='Logo'></img>
                </Logo>
                <h1>
                    Dashboard Kit
                </h1>
            </HeadNav>
            <ListNav>
                <Link to="/">
                    <House />
                    Home
                </Link>
                <Link to="/mentee">
                    <Users /> 
                    Mentee
                </Link>
                <Link to="/mentors">
                    <User />
                    Mentors
                </Link>
                <Link to="/tickets">
                    <Ticket />
                    Tickets
                </Link>
            </ListNav>
        </Container>
    );
};

export default NavBar;