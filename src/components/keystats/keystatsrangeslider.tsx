import RangeSlider from "@/components/rangeslider";
import React from "react";

interface IProps {
  min: number,
  max: number,
  current: number
}


const KeystatsRangeSlider : React.FC<IProps> = ({ min, max, current }) => {
  return(
    <tr>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent dark:border-white/40">
        <RangeSlider 
          min={min} 
          max={max} 
          current={current}
        />
      </td>
    </tr>
  )
}

export default React.memo(KeystatsRangeSlider)