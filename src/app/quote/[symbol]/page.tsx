import { IFiling, ITicker, ITickerDetails } from "@/model/model";
import instance from "@/services/instance";
import Image from 'next/image';

interface IProps {
  params: ITicker
}

export async function generateStaticParams() {
  const { data } = await instance.get<ITicker[]>("tickers");

  return data;
}

export default async function symbol({ params } : IProps) {
  const filingResponse = await instance.get<IFiling>(`filing/${params.ticker}`);
  const tickerDetailsResponse = await instance.get<ITickerDetails>(`tickers/${params.ticker}`);

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="flex-auto p-6">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="relative inline-flex items-center justify-center text-base text-white transition-all duration-200 ease-in-out h-15 w-15 rounded-xl">
              <Image 
                width={4}
                height={4}
                alt="quote-icon" 
                src="/vercel.svg" 
                className="w-full shadow-sm rounded-xl"
              />
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full">
              <h5 className="mb-1 dark:text-white">{params.ticker}</h5>
              <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">{tickerDetailsResponse.data.name}</p>
            </div>
          </div>
        </div>
        {/*<Candlestickchart />
        <Keystatstable company={data} />*/}
      </div>
    </div>
  )
}