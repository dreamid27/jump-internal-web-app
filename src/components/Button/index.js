import React from "react";
import styles from './Button.module.css';
import { Link } from "react-router-dom";

const Button = () => {
    return (
        <div className={styles.container}>
            <a>
                <Link className={styles.textLink} to="/">Home</Link>
            </a>
            <a>
                <Link className={styles.textLink} to="/mentee">Mentee</Link>
            </a>
            <a>
                <Link className={styles.textLink} to="/mentors">Mentors</Link>
            </a>
        </div>
    )
}

export default Button;
