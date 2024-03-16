import PropTypes from 'prop-types';
CurrentlyCookDisplay.propTypes={
    item:PropTypes.object,
    index:PropTypes.number
}


export default function CurrentlyCookDisplay({item,index}) {
  return (
    <>
      <tbody className="bg-[#28282808] border-b  ">
        {/* row 1 */}
        <tr className="">
          <th className="text-sm px-2 ">{index+1}</th>
          <td className=" w-24">{item.recipe_name}</td>
          <td className="py-3 pl-2">
            <span>{item.preparing_time}</span>
            <br /> minutes
          </td>
          <td>
            <span>{item.calories}</span>
            <br /> calories
          </td>
         
        </tr>
      </tbody>
    </>
  );
}
