"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  children: React.ReactNode,
  params: {
    ticker: string
  }
}
export default function DashboardLayout({ children, params }: IProps) {
  const pathName = usePathname();
  const activeLinkStyle = "px-1 py-4 flex text-sm leading-6 font-semibold border-b-2 -mb-px text-blue-850 border-current";
  const inactiveLinkStyle = "px-1 py-4 flex text-sm leading-6 font-semibold border-b-2 -mb-px text-slate-900 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700";

  return (
    <section>
      <div className="flex-none min-w-full">
        <ul className="border-b border-slate-200 space-x-6 flex whitespace-nowrap dark:border-slate-200/5 mb-px">
          <li>
            <Link
            href={`/quote/${params.ticker}`}
            className={pathName === `/quote/${params.ticker}`? activeLinkStyle : inactiveLinkStyle}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
            href={`/quote/${params.ticker}/valuation`}
            className={pathName === `/quote/${params.ticker}/valuation`? activeLinkStyle : inactiveLinkStyle}
            >
              Valuation
            </Link>
          </li>
        </ul>
      </div>
      {children}
    </section>
  )
}