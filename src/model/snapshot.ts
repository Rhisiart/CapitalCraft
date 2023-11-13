interface IDay {
  c: number; // close
  h: number; // high
  l: number; // low
  o: number; // open
  v: number; // volume
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

interface IMin {
  av: number; // average volume
  c: number; // close
  h: number; // high
  l: number; // low
  n: number; // total trades
  o: number; // open
  t: number; // timestamp
  v: number; // volume
  vw: number; // volume weighted average
}

interface IPrevDay {
  c: number; // close
  h: number; // high
  l: number; // low
  o: number; // open
  v: number; // volume
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