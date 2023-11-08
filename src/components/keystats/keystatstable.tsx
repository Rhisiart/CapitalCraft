import React from "react";
import Keystatsrow from "./keystatsrow";

interface IProps {
  filing : any
}


const Keystatstable : React.FC<IProps> = ({ filing }) => {
  return(
    <div>
      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
        <tbody className="align-top">
          <Keystatsrow name="Market Cap" value={`$${filing.MarketCapitalization}`} />
          <Keystatsrow name="Price to Earning" value={filing.PERatio} />
          <Keystatsrow name="Earning Per Share" value={filing.EPS} />
          <Keystatsrow name="52 Week Range" value={`$${filing["52WeekLow"]} - $${filing["52WeekHigh"]}`} />
          <Keystatsrow name="Industry" value={`${filing.Sector} | ${filing.Industry}`} />
          <Keystatsrow name="Beta" value={filing.Beta} />
          <Keystatsrow name="Share Outstanding" value={filing.SharesOutstanding} />
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(Keystatstable)