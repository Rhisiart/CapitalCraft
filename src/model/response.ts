import { ISnapshot } from "./snapshot";
import { ITickerDetails } from "./ticker";

export interface IOverviewResponse {
  filings: any[],
  details: ITickerDetails,
  snapshot: ISnapshot
}