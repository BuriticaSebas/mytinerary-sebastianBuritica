import Logo from "../assets/2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/actions/LogOut.js"


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openModaluser,setOpenModaluser] = useState(false)

  const toggleModaluser = ()=>{
    setOpenModaluser(prev => !prev)
  }

  const {login} = useSelector((state)=> state.auth)

  let online = login.online

  const dispatch = useDispatch()

  return (
    <nav className="flex justify-between items-center w-full fixed top-0 left-0 z-50 p-1 bg-black bg-opacity-50 backdrop-blur-md">
      <img src={Logo} className="w-10 sm:w-12 md:w-16 h-auto" alt="Logo" />

      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu className="text-2xl" />
      </button>

      <ul
  className={`${
    isOpen ? "flex" : "hidden"
  } sm:flex flex-col sm:flex-row gap-4 items-center text-white text-base md:gap-8 md:text-xl absolute sm:static top-16 right-4 bg-black bg-opacity-90 sm:bg-transparent p-4 sm:p-0 rounded-md sm:rounded-none shadow-md`}
>
  <li>
    <Link to="/" className="hover:text-blue-300 text-xl font-bold" onClick={() => setIsOpen(false)}>
      Home
    </Link>
  </li>
  <li>
    <Link to="/cities" className="hover:text-blue-300 text-xl font-bold" onClick={() => setIsOpen(false)}>
      Cities
    </Link>
  </li>
  <li className="relative">
    {online ? (
      <>
        <button onClick={toggleModaluser}>
          <div className="flex items-center gap-2">
            <img
              src={localStorage.getItem("photouser")}
              alt=""
              className="w-12 rounded-full m-auto"
            />
          </div>
        </button>

        <div
          className={`bg-black rounded-lg p-1 flex flex-col gap-3 absolute w-30 right-1 ${
            openModaluser ? "block" : "hidden"
          }`}
        >
          <small className="font-bold">{localStorage.getItem("nameuser")} {localStorage.getItem("lastnameuser")}</small>
          <button className="bg-red-500 rounded-lg" onClick={()=>{dispatch(logOutUser(localStorage.getItem("emailUser")))}}>Log Out</button>
        </div>
      </>
    ) : (
      <Link
        to="/login"
        className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-blue-300 transition"
        onClick={() => setIsOpen(false)}
      >
        Login
      </Link>
    )}
  </li>
</ul>

    </nav>
  );
}

export default Navbar;
