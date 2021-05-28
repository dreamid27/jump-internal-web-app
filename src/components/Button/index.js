import React from "react";
import { Link } from "react-router-dom";
import Container from './Button.module';
import HeadNav from './Button.module';
import ListNav from './Button.module';

const Button = () => {
    return (
        <Container>
            <Link to="/">Home</Link>
            <Link to="/mentee">Mentee</Link>
            <Link to="/mentors">Mentors</Link>
        </Container>
    )
}

export default Button;
