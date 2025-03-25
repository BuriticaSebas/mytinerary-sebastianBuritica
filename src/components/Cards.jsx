import Alemania from "../assets/ciudades/alemania.jpg";
import { SiGooglemaps } from "react-icons/si";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <>
      <div className="bg-black rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] transition  duration-70 ease-in hover:-translate-y-1 hover:scale-105 ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-white text-black flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1 text-white">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-white"></div>
        </div>


        <button className="p-1 bg-stone-100 text-black inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]  hover:shadow-[0px_2px_6px_4px_#6b6b6b] " >

           <Link to="/detailCity" >Explore Now!</Link>
           
        </button>
      </div>









      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>

      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>

      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>

      <div className="bg-stone-100 rounded-xl col-span-1 flex flex-col justify-between h-[288px] md:w-[330px] md:h-[480px] ">
        <div className="w-full rounded-xl h-1/2 relative">
          <img src={Alemania} alt="" className="w-full h-full rounded-2xl" />

          <div className="bg-black rounded-lg text-white text-[0.5rem] font-bold w-[3.5rem] flex items-center justify-center absolute top-2 left-1  md:text-[0.8rem] md:w-[4.7rem] ">
            <SiGooglemaps />
            <p className="">Germany</p>
          </div>

          <div className="bg-black text-white flex  justify-between p-1 rounded-b-lg w-4/5 m-auto">
            <div className="flex gap-1 items-center">
              <GrLanguage className="text-[0.7rem]" />

              <p className="text-[0.7rem]  md:text-[0.9rem]">Language</p>
            </div>

            <p className="text-[0.7rem] md:text-[0.9rem]">French</p>
          </div>
        </div>

        <div className="text-center">
          <p className="[font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-black mx-1">Munich, Alemania</p>
          <div className="h-[2px] w-full bg-black"></div>
        </div>


        <button className="p-1 bg-black text-white inline mx-auto rounded-lg mb-2 text-[0.7rem] font-extrabold  md:text-[0.9rem]">Expore Now !</button>
      </div>


      

    </>
  );
};
export default Cards;
