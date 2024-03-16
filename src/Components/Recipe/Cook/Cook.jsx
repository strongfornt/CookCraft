

export default function Cook() {
  return (
    <>
       <div className="px-4">
       <div className="pb-4 border-b border-[#28282826]  ">
        <h1 className="text-[#282828] font-semibold text-xl text-center ">Want to cook: 0<span>1</span></h1>
        </div>
       </div>

        {/* details container  start------------------------- */}
        <div>
            {/* naming div-------------------- */}
            <div className="flex justify-between w-3/5 bg-red-800 ml-10 ">
                <p className="text-sm text-[#878787] font-normal ">Name</p>
                <p className="text-sm text-[#878787] font-normal ">Time</p>
                <p className="text-sm text-[#878787] font-normal ">Calories</p>
            </div>
            <div className="flex justify-between gap-2 bg-[#28282808] p-2 items-center">
                <p className="text-[#282828B2] text-sm font-normal">1</p>
                <p className="text-[#282828B2] text-sm font-normal">Chicken <br />Caesar Salad</p>
                <p className="text-[#282828B2] text-sm font-normal"><span>20</span><br /> minutes</p>
                <p className="text-[#282828B2] text-sm font-normal"><span>400</span><br /> calories</p>
                <button 
                className="bg-[#0BE58A] p-2 rounded-xl font-semibold text-white hover:bg-transparent hover:text-[#0BE58A]
                border border-[#0BE58A] duration-300"  >
                    Preparing
                    </button>
            </div>

        </div>
        {/* details container  end------------------------- */}
    </>
  )
}
