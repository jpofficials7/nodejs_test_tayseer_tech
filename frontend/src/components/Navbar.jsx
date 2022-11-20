import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav>
                <div style={{
                    height: "50px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'center',
                    alignItems: "center"

                }}>
                    <ul style={{
                        height: "50px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: 'center',
                        alignItems: "center",
                        margin: "50px",


                    }}>
                        <li style={{ listStyle: "none", margin: "50px" }}>
                            <NavLink style={{
                                textDecoration: "none"
                            }} to="/">Home</NavLink>
                        </li>
                        <li style={{ listStyle: "none", margin: "50px" }}>
                            <NavLink style={{
                                textDecoration: "none"
                            }} to="/record">Record</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar