import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div className="w-full bg-stone-900 text-white flex justify-evenly flex-wrap">
      <div className="flex flex-col gap-2 p-3 text-center">
        <h6 className="font-extrabold">Pages</h6>
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/cities" className="hover:text-blue-200">Cities</Link>
        <Link to="/login" className="hover:text-blue-200">Login</Link>
      </div>

      <div className="flex flex-col gap-2 p-3 text-center">
        <h6 className="font-extrabold">FOLLOW US</h6>

        <p className="hover:text-blue-200"><a href="https://www.facebook.com/?locale=es_LA" target="_blank">Facebook</a></p>
        <p className="hover:text-blue-200"><a href="https://www.instagram.com/explore/" target="_blanck">Instagram</a></p>
      </div>

      <div className="flex flex-col gap-2 p-3 text-center">
        <h6 className="font-extrabold">CONTACT US</h6>

        <p className="hover:text-blue-200">Phone: 3107263410</p>
        <p className="hover:text-blue-200">Correo: jhoseburitica40@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
