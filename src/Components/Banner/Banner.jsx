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
       Indulge in culinary bliss at our restaurant, where every dish tells a story of passion and flavor. From savory classics to innovative creations, embark on a gastronomic journey that tantalizes your taste buds and leaves you craving for more.
       </p>
       {/* button div --------------- */}
       <div className=" w-full  lg:w-1/3 flex justify-evenly ">
        <button className="btn bg-[#B2FFDE] duration-300 font-semibold text-[#150B2B] hover:bg-transparent hover:text-[#FFFFFF] ">
        Explore Now
        </button>

        <button className="btn bg-transparent duration-300 hover:bg-[#B2FFDE] text-[#FFFFFF] font-semibold hover:text-black ">
        Our Feedback
        </button>
       </div>
       </div>
      </div>
      {/* container div end-------------------*/}
    </>
  );
}
