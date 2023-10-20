import { Link } from "react-router-dom";
function NavBar(props) {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/posts">Posts</Link></li>

            </ul>
        </nav>
    );
}

export default NavBar;