interface Address {
  address1: string;
  city: string;
  state: string;
  postal_code: string;
}

interface Branding {
  logo_url: string;
  icon_url: string;
}

export interface ITickerDetails {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  primary_exchange: string;
  type: string;
  active: boolean;
  currency_name: string;
  cik: string;
  composite_figi: string;
  share_class_figi: string;
  market_cap: number;
  phone_number: string;
  address: Address;
  description: string;
  sic_code: string;
  sic_description: string;
  ticker_root: string;
  homepage_url: string;
  total_employees: number;
  list_date: string;
  branding: Branding;
  share_class_shares_outstanding: number;
  weighted_shares_outstanding: number;
  round_lot: number;
}
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

interface IFilingItem {
  value: number,
  unit: string,
  label: string,
  order: number,
}

interface IBalanceSheet {
  accounts_payable: IFilingItem,
  liabilities_and_equity: IFilingItem,
  fixed_assets: IFilingItem,
  intangible_assets: IFilingItem,
  long_term_debt: IFilingItem,
  other_current_assets: IFilingItem,
  assets: IFilingItem,
  noncurrent_assets: IFilingItem,
  other_current_liabilities: IFilingItem,
  equity: IFilingItem,
  liabilities: IFilingItem,
  current_assets: IFilingItem,
  equity_attributable_to_noncontrolling_interest: IFilingItem,
  inventory: IFilingItem,
  wages: IFilingItem,
  other_noncurrent_liabilities: IFilingItem,
  noncurrent_liabilities: IFilingItem,
  other_noncurrent_assets: IFilingItem,
  current_liabilities: IFilingItem,
  equity_attributable_to_parent: IFilingItem,
}

interface ICashFlowStatement {
  net_cash_flow_continuing: IFilingItem,
  net_cash_flow_from_investing_activities_continuing: IFilingItem,
  net_cash_flow_from_investing_activities: IFilingItem,
  net_cash_flow_from_financing_activities_continuing: IFilingItem,
  net_cash_flow: IFilingItem,
  net_cash_flow_from_financing_activities: IFilingItem,
  net_cash_flow_from_operating_activities: IFilingItem,
  net_cash_flow_from_operating_activities_continuing: IFilingItem
}

interface IIncomeStatement {
  income_tax_expense_benefit_deferred: IFilingItem,
  nonoperating_income_loss: IFilingItem,
  net_income_loss_available_to_common_stockholders_basic: IFilingItem,
  basic_earnings_per_share: IFilingItem,
  diluted_average_shares: IFilingItem,
  income_loss_from_continuing_operations_before_tax: IFilingItem,
  basic_average_shares: IFilingItem,
  cost_of_revenue: IFilingItem,
  gross_profit: IFilingItem,
  operating_expenses: IFilingItem,
  diluted_earnings_per_share: IFilingItem,
  depreciation_and_amortization: IFilingItem,
  operating_income_loss: IFilingItem,
  net_income_loss_attributable_to_parent: IFilingItem,
  net_income_loss_attributable_to_noncontrolling_interest: IFilingItem,
  interest_expense_operating: IFilingItem,
  income_loss_from_continuing_operations_after_tax: IFilingItem,
  selling_general_and_administrative_expenses: IFilingItem,
  income_tax_expense_benefit: IFilingItem,
  net_income_loss: IFilingItem,
  preferred_stock_dividends_and_other_adjustments: IFilingItem,
  participating_securities_distributed_and_undistributed_earnings_loss_basic: IFilingItem,
  benefits_costs_expenses: IFilingItem,
  research_and_development: IFilingItem,
  costs_and_expenses: IFilingItem,
  revenues: IFilingItem
}

interface IComprehensiveIncome {
  other_comprehensive_income_loss: IFilingItem,
  comprehensive_income_loss: IFilingItem,
  comprehensive_income_loss_attributable_to_noncontrolling_interest: IFilingItem,
  comprehensive_income_loss_attributable_to_parent: IFilingItem
}

interface IFinancials {
  balance_sheet: IBalanceSheet,
  cash_flow_statement: ICashFlowStatement,
  income_statement: IIncomeStatement,
  comprehensive_income: IComprehensiveIncome
}

export interface IFiling {
  id: string,
  start_date: string,
  end_date: string,
  filing_date: string,
  timeframe: string,
  fiscal_period: string,
  fiscal_year: string,
  cik: string,
  sic: string,
  tickers: string[],
  company_name: string,
  source_filing_url: string,
  source_filing_file_url: string,
  financials: IFinancials
}