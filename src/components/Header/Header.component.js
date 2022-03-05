import "./header.styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>

      <div className="search">
        <input type="text" placeholder="Search Series" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
