import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
    return (
        <div>
            <a>
                <Link to="/">Home</Link>
            </a>
            <a>
                <Link to="/mentee">Mentee</Link>
            </a>
            <a>
                <Link to="/mentors">Mentors</Link
                ></a>
        </div>
    )
}

export default Button;
