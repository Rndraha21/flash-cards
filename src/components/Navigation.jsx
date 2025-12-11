import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Navigation = ({ handlePrevious, handleNext, isFlipped, onFlip }) => {
  return (
    <div className="flex items-center justify-between mt-2 bg-green-200 p-2 rounded-sm">
      <button
        className="flex items-center justify-center px-2  py-1"
        onClick={handlePrevious}
      >
        <IoMdArrowDropleft />
        <span>Previous</span>
      </button>
      <button onClick={onFlip}>
        {isFlipped ? (
          <div className="flex items-center gap-1">
            <AiFillEyeInvisible /> Hide answer
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <AiFillEye /> Show answer
          </div>
        )}
      </button>
      <button
        className="flex items-center justify-center px-2 py-1"
        onClick={handleNext}
      >
        <span>Next</span>
        <IoMdArrowDropright />
      </button>
    </div>
  );
};

export default Navigation;
