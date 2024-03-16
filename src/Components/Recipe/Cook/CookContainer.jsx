import Cook from "./Cook";
import PropTypes from "prop-types";
import CurrentlyCook from "./CurrentlyCook";

CookContainer.propTypes = {
  card: PropTypes.array,
  cookCount: PropTypes.number,
  handleDeleteButton: PropTypes.func,
  currentCook:PropTypes.array,
  currentCount:PropTypes.number
};

// import CurrentlyCook from "./CurrentlyCook";

export default function CookContainer({ card, cookCount, handleDeleteButton,currentCook,currentCount }) {
  return (
    <div className="lg:col-span-1 mt-16  min-w-fit  ">
      <div className="border  border-[#28282833] py-8  rounded-xl">
        <Cook
          card={card}
          cookCount={cookCount}
          handleDeleteButton={handleDeleteButton}
        />

        <CurrentlyCook
            currentCook ={currentCook}
            currentCount={currentCount}
        />
      </div>
    </div>
  );
}
