import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
