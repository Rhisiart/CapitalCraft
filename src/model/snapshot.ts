import { IAggregateBar, IBar } from "./bar";

interface IDay extends IBar {
  vw: number; // volume weighted average
}

interface ILastQuote {
  P: number;
  S: number;
  p: number;
  s: number;
  t: number;
}

interface ILastTrade {
  c: number[];
  i: string;
  p: number;
  s: number;
  t: number;
  x: number;
}

interface IMin extends IAggregateBar {
  av: number; // average volume
}

interface IPrevDay extends IBar {
  vw: number; // volume weighted average
}

export interface ISnapshot {
  day: IDay;
  lastQuote: ILastQuote;
  lastTrade: ILastTrade;
  min: IMin;
  prevDay: IPrevDay;
  ticker: string;
  todaysChange: number;
  todaysChangePerc: number;
  updated: number;
}