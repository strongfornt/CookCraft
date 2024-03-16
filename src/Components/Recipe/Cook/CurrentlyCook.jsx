import CurrentlyCookDisplay from "./CurrentlyCookDisplay";

import PropTypes from 'prop-types';
CurrentlyCook.propTypes = {
    currentCook:PropTypes.array,
    currentCount:PropTypes.number
}

export default function CurrentlyCook({ currentCook,currentCount }) {
  return (
    <>
      <div className="px-4 pt-4">
        <div className="pb-4 border-b border-[#28282826]  ">
          <h1 className="text-[#282828] font-semibold text-xl text-center ">
            Currently cooking: <span>{currentCount}</span>
          </h1>
        </div>
      </div>
        {/* table start ----------------- */}
      <div className="">
  <table className=" text-[#282828CC] text-sm w-full font-medium table  table-auto ">
    {/* head */}
    <thead className="   ">
      <tr >
        <td className="px-2">
        
        </td>
        <td className="py-4">Name</td>
        <td>Time</td>
        <td>Calories</td>
        <td>
            
        </td>
      </tr>
    </thead>
   
       {
        currentCook.map((item,index) => <CurrentlyCookDisplay
        item={item}
        key={index}
        index={index}
        />)
       }
  </table>
</div>

    </>
  );
}
