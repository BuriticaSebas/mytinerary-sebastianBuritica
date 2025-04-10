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

          <button>
          <Link
            to="/cities"
            className="inline-block mt-8 px-6 py-3 bg-white text-black text-lg font-black rounded-full hover:bg-blue-200 transition shadow-lg"
          >
            Explore Now!
          </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default CallAction2;
