import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInBar = () => {
    return (

            <ul className=" d-flex nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/createPlan">Make Plane</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login </NavLink>
                </li>
            </ul> 

    )
}

export default SignedInBar