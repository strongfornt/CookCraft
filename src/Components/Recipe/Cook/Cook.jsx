import TableDisplay from "./TableDisplay";
import PropTypes from 'prop-types';
Cook.propTypes = {
    card:PropTypes.array,
    cookCount:PropTypes.number,
    handleDeleteButton:PropTypes.func
}

export default function Cook({card,cookCount,handleDeleteButton}) {
    
  return (
    <>
       <div className="px-4">
       <div className="pb-4 border-b border-[#28282826]  ">
        <h1 className="text-[#282828] font-semibold text-xl text-center ">Want to cook: <span>{cookCount}</span></h1>
        </div>
       </div>

     
        
        <div className="">
  <table className=" text-[#282828CC] text-sm w-full  font-medium   table-auto ">
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
        card.map((item,index) =><TableDisplay item={item}
         key={index}
          index={index}
           handleDeleteButton={handleDeleteButton}
            />)
    }
  
 
    
  </table>
</div>
        
        {/* details container  end------------------------- */}
    </>
  )
}
