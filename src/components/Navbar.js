import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Logeuse.fr</h1>
      <div className="nav-right">
        <Link to="howItWorks" smooth={true} duration={500}>
          <h3>Comment ça marche ?</h3>
        </Link>
        <Link to="becomeHost" smooth={true} duration={500}>
          <button>
            <h3>Devenez logeuse</h3>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
