import React from "react";
import Category from "./category";

interface IProps {

}


const Section : React.FC<IProps> = ({}) => {
  return(
    <ul role="list" className="flex flex-col flex-1 gap-y-7">
      <li>
        <ul role="list" className="-mx-2">
          <Category 
            name="Dashboard"
            svg="/dashboard.svg"
            alt="dashboard"
            page="/"
          />
          <Category 
            name="Market"
            svg="/market.svg"
            alt="market"
            page="/"
          />
        </ul>
      </li>
    </ul>
  )
}

export default React.memo(Section)