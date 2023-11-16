import { IFiling } from "@/model/filing";
import { ISnapshot } from "@/model/snapshot";
import { ITickerDetails } from "@/model/ticker";
import React from "react";

interface IProps {
  filings: IFiling[],
  details: ITickerDetails,
  snapshot: ISnapshot
}


const Keystatstable : React.FC<IProps> = ({ filings, details, snapshot }) => {
  return(
    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
      <tbody className="align-top">
       
      </tbody>
    </table>
  )
}

export default React.memo(Keystatstable)