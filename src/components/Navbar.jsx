import Logo from "../assets/2.png";
import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
        <nav className="flex justify-between items-center absolute z-50 top-2 right-2 z-50 w-65  md:w-full   ">
                  <div className="ml-7  ">
                    <img
                      src={Logo}
                      className="w-10 sm:w-12 md:w-20 h-auto"
                      alt="Logo"
                    />
                  </div>
        
                  <div className="md:mr-5">
                    <ul className="flex gap-2 items-center   text-white   md:gap-8  md:text-2xl">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/cities">Cities</Link></li>
                      <li><Link to="/login"> <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg> 
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
        
        </>
    )
}


export default Navbar