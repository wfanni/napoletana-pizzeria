import { Link } from "react-router-dom";
import "./Button.css";

const Button = () => {
    return (
        <div className="book-wrapper">
            <Link id="bookBtn" to="/book">Book A Table</Link>
        </div>
    )
}

export default Button
