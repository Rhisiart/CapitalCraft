import Candlestickchart from "@/components/charts/candlestickchart";
import Keystatstable from "@/components/keystats/keystatstable";
import { ICompany, IQuote } from "@/model/model";
import instance from "@/services/instance";
import Image from 'next/image';

interface IProps {
  params: IQuote
}

export async function generateStaticParams() {
  const { data } = await instance.get<IQuote[]>("companies");

  return data;
}

export default async function symbol({ params } : IProps) {
  const { data } = await instance.get<ICompany>(`quote/${params.symbol}/overview`);

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
      <div className="flex-auto p-6">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="relative inline-flex items-center justify-center text-base text-white transition-all duration-200 ease-in-out h-15 w-15 rounded-xl">
              <Image alt="quote-icon" src="../../vercel.svg" className="w-full shadow-sm rounded-xl"/>
            </div>
          </div>
          <div className="flex-none w-auto max-w-full px-3 my-auto">
            <div className="h-full">
              <h5 className="mb-1 dark:text-white">{params.symbol}</h5>
              <p className="mb-0 text-sm font-semibold leading-normal dark:text-white dark:opacity-60">{data.Name}</p>
            </div>
          </div>
        </div>
        <Candlestickchart />
        <Keystatstable company={data} />
      </div>
    </div>
  )
}