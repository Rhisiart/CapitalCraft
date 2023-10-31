export interface ITicker {
  ticker: string,
  name: string,
  market: string,
  locale: string,
  type: string,
  active: boolean,
  currency_name: string,
  composite_figi?: string,
  share_class_figi?: string,
  last_updated_utc: string,
  primary_exchange?: string,
  cik?: string
}