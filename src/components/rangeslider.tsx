import React from "react";

interface IProps {
  min: number,
  max: number,
  current: number
}


const RangeSlider : React.FC<IProps> = ({ min, max, current }) => {
  const getPositionOfThumb = () => {
    const range = max - min;
    const currentInRange = (current - min) / range;

    return currentInRange * 100;
  }

  const position = getPositionOfThumb();
  const color = position >= 50 ? "bg-green-500" : "bg-red-500";

  return(
    <div className="m-auto items-center justify-center">
      <div className="py-1 relative min-w-full">
          <div className="h-2 bg-gray-200 rounded-full">
              <div className={`absolute h-2 rounded-full ${color} w-0`} style={{ width: `${position}%` }} />
              <div className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer" style={{ left: `${position}%` }} />
          </div>
      </div>
      <div className="flex justify-between">
        <div className=" text-gray-800">{min}</div>
        <div className=" text-gray-800">{max}</div>
      </div>
    </div>
  )
}

export default React.memo(RangeSlider)