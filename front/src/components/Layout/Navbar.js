import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <NavLink activeClassName={styles.navActive} to={`/profile/${1}`}>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                                <path d="M147.4,164.8c3.5,59,20.1,108.8,51,142.9c0,0,0.7,0.5,2.2,1.2l-7.7,28.5c15.8,12.9,35.6,20.6,57,20.6
                                s41.3-7.7,57-20.6l-7.2-28.7c1.1-0.6,1.6-1,1.6-1c37.8-41.4,54.2-106.2,51.5-182.6c-3.2-91.5-99.6-84.7-102.9-85
                                c-5.2,0.2-99.8-5.4-102.9,85c-0.4,11.7-0.4,23.3,0.1,34.4C147.2,161.3,147.3,163,147.4,164.8z"/>
                                <path d="M352.3,345.6c-25.1,29.4-61.5,48.2-102.3,48.2s-77.2-18.7-102.3-48.2C90.6,366.9,0,408.8,0,460H250H500
                                C500,408.8,409.3,366.9,352.3,345.6z"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.navActive} to="/home">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                                <path d="M267.6,59.9L250,42.3L0.1,292.2l35.2,35.2l40.5-40.5v170.9h104V345.4c0-40.5,31.6-73.5,70.3-73.5
                                c38.6,0,70.3,33.1,70.3,73.5v112.4h105.6V288.5l38.9,38.9l35.2-35.2L267.6,59.9z"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.navActive} to="/notifications">
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 500 500" enableBackground="new 0 0 500 500">
                            <path d="M375,33c-69.1,0-125,44-125,113c0-69.1-55.9-113-125-113S0,89,0,158c0,23.6,6.5,45.7,18,64.6
                            c6.7,11.2,15.4,21.1,25.2,29.6h-0.1L250,467l206.9-214.7h-0.1c9.9-8.5,18.5-18.4,25.2-29.6c11.4-18.9,18-41,18-64.6
                            C500,89,444.1,33,375,33z"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;