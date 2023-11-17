import { IAggregateBar } from "./bar";
import { IFiling } from "./filing";
import { ISnapshot } from "./snapshot";
import { ITickerDetails } from "./ticker";

export interface IOverviewResponse {
  filings: IFiling[],
  details: ITickerDetails,
  snapshot: ISnapshot,
  ytd: IAggregateBar,
  currentPrice: number
}