
import KeyStatsTable from "@/components/keystats/keystatstable";
import { IOverviewResponse } from "@/model/response";
import { ITicker } from "@/model/ticker";
import instance from "@/services/instance";
import Image from "next/image";


interface IProps {
  params: ITicker
}

export async function generateStaticParams() {
  const { data } = await instance.get<ITicker[]>("tickers");

  return data;
}

export default async function symbol({ params } : IProps) {
  const { data } = await instance.get<IOverviewResponse>(`tickers/${params.ticker}/overview`);

  //TODO: Get Icon
  const icon = await instance.get(
    `tickers/${params.ticker}/icon/${data.details.branding.icon_url}`, { 
      responseType: "text",
      responseEncoding: "base64" 
    }
  );
  
  return (
    <div className="flex flex-row h-full mt-6">
      <div className="w-9/12">
        <div className="flex flex-col min-w-0 break-words bg-white border-0 shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-6">
            <div className=" flex flex-wrap -mx-3">
              <div className="flex-none w-auto max-w-full px-3">
                <div className="inline-flex items-center justify-center text-base text-white transition-all duration-200 ease-in-out">
                  <Image 
                    width={60}
                    height={60}
                    alt="ticker-icon" 
                    src={`data:image/png;base64,${icon.data}`}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex-none w-auto max-w-full px-3 my-auto">
                <div className="h-full">
                  <h5 className="mb-1 dark:text-white">{params.ticker}</h5>
                  <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">{data.details.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-9 w-3/12">
        <div className="flex flex-col min-w-0 break-words bg-white border-0 shadow dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <KeyStatsTable 
            filings={data.filings}
            details={data.details}
            snapshot={data.snapshot} 
            ytd={data.ytd} 
            currentPrice={data.currentPrice}
          /> 
        </div>
      </div>
    </div>
  )
}