import PropTypes from "prop-types";
TableDisplay.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  handleDeleteButton:PropTypes.func
};

export default function TableDisplay({ item, index ,handleDeleteButton }) {
  
  return (
    <>
      <tbody className="bg-[#28282808] border-b  ">
        {/* row 1 */}
        <tr className="">
          <th className="text-sm px-2 ">{index + 1}</th>
          <td className=" w-24">{item.recipe_name}</td>
          <td className="py-3 px-2">
            <span>{item.preparing_time}</span>
            <br /> minutes
          </td>
          <td>
            <span>{item.calories}</span>
            <br /> calories
          </td>
          <th>
            <button
            onClick={()=>handleDeleteButton(item)}
             className="btn btn-ghost btn-xs bg-[#0BE58A] text-white hover:text-[#0BE58A] hover:bg-white hover:border-[#0BE58A] ">
              Preparing
            </button>
          </th>
        </tr>
      </tbody>
    </>
  );
}
