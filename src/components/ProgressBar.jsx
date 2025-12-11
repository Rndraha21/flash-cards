const ProgressBar = ({ currentIndex, totalData }) => {
  const progressPercent = (((currentIndex + 1) / totalData) * 100).toFixed(0);
  console.log(progressPercent);

  return (
    <div className="border-gray-300 border-2 p-1 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 w-[85%]">
          <div
            className="bg-green-200 p-4 rounded-sm"
            style={{ width: `${progressPercent}%` }}
          ></div>
          <p>{progressPercent}%</p>
        </div>
        <span>
          {currentIndex + 1} of {totalData}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
