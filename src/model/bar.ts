export interface IBar {
  c: number; // close
  h: number; // high
  l: number; // low
  o: number; // open
  v: number; // volume
}

export interface IAggregateBar extends IBar {
  n: number; // total trades
  t: number; // timestamp
  vw: number; // volume weighted average
}