import welcome from "../assets/welcome.jpg";
import { Link } from "react-router-dom";

function CallAction2() {
  return (
    <>
      <div className="w-full  text-white flex flex-col sm:flex-row sm:items-center justify-center text-center p-5">
        <div className="w-full sm:w-2/5 ">
          <img src={welcome} alt="" className="rounded-3xl sm:1/4" />
        </div>

        <div className="p-2 sm:w-2/5  ">
          <h3 className="font-Perso font-black text-[1.5rem] p-2">
            Here you will find your best plan for traveling
          </h3>

          <p className="font-Mohave italic p-1">
            Whether you're planning a family vacation with your pet, a relaxing
            weekend getaway, or an adventurous excursion, travel itineraries are
            ideal for trips of all kinds. You can find everything from charming
            mountain cabins and lakeside lodges to stunning cities.
          </p>

          <button className="px-2 py-1 bg-blue-600 text-black rounded-full mt-5 font-Perso md:text-xl shadow-[0px_1px_19px_7px_#7a7a7a]">
            <Link to="/cities">Explore Now !</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default CallAction2;
