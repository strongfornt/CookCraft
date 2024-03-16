import banner from "./../../assets/banner2.png";

export default function Banner() {
  return (
    <>
      {/* container div start----------------*/}
      <div
        className="min-h-[85vh] rounded-xl bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `linear-gradient(rgba(21, 11, 43, 0.90)0%, rgba(21, 11, 43, 0.00)100%),url(${banner})`,
        }}
      >
        {/* title start */}
       <div className="flex flex-col items-center justify-center min-h-[85vh] px-2 md:px-0  gap-4 ">
       <p className="text-[#FFFFFF] text-center font-bold text-2xl lg:text-5xl lg:w-3/4 ">Discover an exceptional cooking class tailored for you!</p>
       <p className=" text-[#FFFFFF] lg:w-4/5 text-center text-sm font-normal ">
       Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
       </p>
       {/* button div --------------- */}
       <div className=" w-full  lg:w-1/3 flex justify-evenly ">
        <button className="btn bg-[#B2FFDE]  font-semibold text-[#150B2B] hover:bg-transparent hover:text-[#FFFFFF] ">
        Explore Now
        </button>

        <button className="btn bg-transparent hover:bg-[#B2FFDE] text-[#FFFFFF] font-semibold hover:text-black ">
        Our Feedback
        </button>
       </div>
       </div>
      </div>
      {/* container div end-------------------*/}
    </>
  );
}
