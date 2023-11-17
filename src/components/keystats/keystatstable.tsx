import { IAggregateBar } from "@/model/bar";
import { IFiling } from "@/model/filing";
import { ISnapshot } from "@/model/snapshot";
import { ITickerDetails } from "@/model/ticker";
import React from "react";
import KeyStatsHeader from "./keystatsheader";
import KeyStatsRow from "./keystatsrow";

interface IProps {
  filings: IFiling[],
  details: ITickerDetails,
  snapshot: ISnapshot,
  ytd: IAggregateBar,
  currentPrice: number
}

const KeyStatsTable : React.FC<IProps> = ({ filings, details, snapshot, ytd, currentPrice }) => {
  return(
    <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
      <KeyStatsHeader ytd={ytd} snapshot={snapshot} currentPrice={currentPrice}/>
      <tbody className="align-top">
        <KeyStatsRow name="Previous Close" value={snapshot.prevDay.c} />
        <KeyStatsRow name="Market Cap" value={details.market_cap} />  
      </tbody>
    </table>
  )
}

export default React.memo(KeyStatsTable)