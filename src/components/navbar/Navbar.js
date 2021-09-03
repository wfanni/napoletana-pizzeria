import "./Navbar.css";
import { Link } from "react-router-dom";
import sideLogo from "./napoletana-side.svg";

const Navbar = () => {
    return (
        <nav>
            <div id="logoDIV">
                <img src={sideLogo} alt="side-logo"></img>
            </div>
            <ul id="navbarUL">
                <li className="navbarLI">
                    <Link to="/book">Book A Table</Link>
                </li>
                <li className="navbarLI">
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
