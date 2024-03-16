import PropTypes from "prop-types";
TotalTime.propTypes = {
    totalCalories:PropTypes.number,
    totalTime:PropTypes.number
}

export default function TotalTime({totalCalories,totalTime}) {
    
  return (
    <>
    <div className="pt-6"> 
            
      <table className="table-auto table text-[#282828CC]  font-extrabold">
        <thead>
        <tr>
            <td className="w-6"></td>
            <td className="w-24 "></td>
            <td className=" px-4">Total Time =<br /> <span>{totalTime}</span> minutes</td>
            <td className="px-4">Total Calories =<br /> <span>{totalCalories}</span> calories</td>
        </tr>
        </thead>
      </table>
    </div>
    </>
  );
}
