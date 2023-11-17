import { IAggregateBar } from "@/model/bar";
import { ISnapshot } from "@/model/snapshot";
import React from "react";
import RangeSlider from "../rangeslider";

interface IProps {
  snapshot: ISnapshot,
  ytd: IAggregateBar,
  currentPrice: number
}


const KeyStatsHeader : React.FC<IProps> = ({ snapshot, ytd, currentPrice }) => {
  return(
    <thead>
      <tr>
        <th colSpan={2} className="p-5 align-middle bg-transparent whitespace-nowrap shadow-transparent">
          <div className="mb-3.5">Day Range</div>
          <RangeSlider 
            min={snapshot.day.l} 
            max={snapshot.day.h} 
            current={currentPrice}
          />
        </th>
      </tr>
      <tr>
      <th colSpan={2} className="p-5 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent dark:border-white/40">
        <div className="mb-3.5">52 week Range</div>
        <RangeSlider 
          min={ytd.l} 
          max={ytd.h} 
          current={currentPrice}
        />
      </th>
    </tr>
  </thead>
  )
}

export default React.memo(KeyStatsHeader)