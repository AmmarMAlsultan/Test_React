import { NavLink } from "react-router-dom";
export default function navbar() {
    return (
        <div className="topnav">
            <NavLink to="home">Home</NavLink>
            <NavLink to="news">News</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="form">Form</NavLink>
            <NavLink to="api">Data Api</NavLink>
        </div>
    );
}