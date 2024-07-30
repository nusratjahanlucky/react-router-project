import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>This is my website</h2>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;