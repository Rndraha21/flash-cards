const ProgressBar = ({ currentIndex, totalData }) => {
  const progressPercent = (((currentIndex + 1) / totalData) * 100).toFixed(0);
  console.log(progressPercent);

  return (
    <div className="flex items-center justify-between p-1 border-2 border-gray-300 rounded-md">
      <div className="flex items-center justify-between w-[80%]">
        <div
          className="flex justify-end gap-1 py-2 pl-8 bg-green-200 rounded-sm"
          style={{ width: `${progressPercent}%` }}
        >
          <p className="ml-4">{progressPercent}%</p>
        </div>
      </div>
      <span>
        {currentIndex + 1} of {totalData}
      </span>
    </div>
  );
};

export default ProgressBar;
