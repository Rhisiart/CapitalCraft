import { ICompany } from "@/model/model";
import React from "react";
import Keystatsrow from "./keystatsrow";

interface IProps {
  company : ICompany
}


const Keystatstable : React.FC<IProps> = ({company}) => {
  return(
    <div>
      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
        <tbody className="align-top">
          <Keystatsrow name="Market Cap" value={`$${company.MarketCapitalization}`} />
          <Keystatsrow name="Price to Earning" value={company.PERatio} />
          <Keystatsrow name="Earning Per Share" value={company.EPS} />
          <Keystatsrow name="52 Week Range" value={`$${company["52WeekLow"]} - $${company["52WeekHigh"]}`} />
          <Keystatsrow name="Industry" value={`${company.Sector} | ${company.Industry}`} />
          <Keystatsrow name="Beta" value={company.Beta} />
          <Keystatsrow name="Share Outstanding" value={company.SharesOutstanding} />
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(Keystatstable)