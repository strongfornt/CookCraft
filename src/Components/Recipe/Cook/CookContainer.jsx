import Cook from "./Cook";
import PropTypes from 'prop-types';
CookContainer.propTypes = {
    card:PropTypes.array,
    cookCount:PropTypes.number
}

// import CurrentlyCook from "./CurrentlyCook";


export default function CookContainer({card,cookCount}) {
  return (
    <div className="lg:col-span-1 mt-16  min-w-fit  ">
        <div className="border  border-[#28282833] py-8  rounded-xl">
        <Cook card={card}
        cookCount ={cookCount}
        />
        
        {/* <CurrentlyCook/> */}
        
        </div>
    </div>
  )
}
