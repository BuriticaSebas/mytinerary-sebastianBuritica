import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-stone-900 text-white flex justify-evenly flex-wrap">
      <div className="flex flex-col gap-2 p-3 text-center">
        <h6 className="font-extrabold">Pages</h6>
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className="flex flex-col gap-2 p-3 text-center">
        <h6 className="font-extrabold">FOLLOW US</h6>

        <p>Facebook</p>
        <p>Instagram</p>
      </div>

      <div className="flex flex-col gap-2 p-3 text-center">
        <h6 className="font-extrabold">CONTACT US</h6>

        <p>Phone: 3107263410</p>
        <p>Correo: jhoseburitica40@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
