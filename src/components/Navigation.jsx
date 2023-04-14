import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/login">Login </Link>
        </li>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact_us">ContactUs</Link>
        </li>
      </ul>
    </nav>
  );
};
