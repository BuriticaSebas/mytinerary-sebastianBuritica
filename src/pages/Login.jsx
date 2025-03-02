import imgCons from "../assets/construc.png";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      <div className="w-full bg-white h-120 sm:h-200 text-black flex flex-col items-center justify-center">
        
        <h1 className="p-5 font-[1000]  sm:text-[3rem]">PAGE IN CONSTRUCTION</h1>

        <div className="inline-block  p-2">
          <img src={imgCons} alt="" className="w-full h-full object-cover  sm:h-130  sm:w-130" />
        </div>

      
          
          <button className="m-5 p-2  bg-stone-900 rounded-2xl font-perso text-white"><Link to="/" className="hover:text-blue-200">BACT TO HOME</Link></button>
        
      </div>
    </>
  );
}

export default Login;
