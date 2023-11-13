"use client"


import { ITicker } from "@/model/ticker";
import instance from "@/services/instance";
import Image from "next/image";
import React from "react";
import SearchItem from "./searchItem";

interface IProps {

}


const Search : React.FC<IProps> = ({}) => {
  const [tickers, setTickers] = React.useState<ITicker[]>();
  const [display, setDisplay] = React.useState<"hidden" | "block">("hidden");

  const searchRef = React.useRef<HTMLDivElement>(null);

  const getTickers = async (value : string) => {
    try{
      //TODO: Handle when the e.currentTarget.value is empty string
      const { data } = await instance.get<ITicker[]>("/tickers", {
        params: {
          search: value
        }
      });

      setTickers(data);
    } catch(err) {
      console.log(err)
    }
  }

  const handleOnChange = async (e :  React.ChangeEvent<HTMLInputElement>) => {
    try{
      if(e.currentTarget.value === "" || e.currentTarget.value === null || e.currentTarget.value === undefined) {
        setDisplay("hidden");
      } else {
        getTickers(e.currentTarget.value);
        setDisplay("block");
      }
    }catch(err) {
      console.log(err);
    }
  }

  const handleOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if(e.currentTarget.value !== "") {
      setDisplay("block");
    }   
  }

  const handleClickOutside = (e: MouseEvent) => {
    if(searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setDisplay("hidden");
    }
  }

  //TODO: think about this useEffect because the event listener, never will be removed
  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [])

  return(
    <div ref={searchRef}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Image 
              src="/search.svg"
              alt="Search"
              width={24}
              height={24}
          />
        </div>
        <div>
          <div>
            <input 
              type="search" 
              id="default-search" 
              className="bg-slate-50 block w-72 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" 
              placeholder="Search symbol, companies..." 
              onChange={handleOnChange}
              onClick={handleOnClick}
            />
          </div>
        </div>
      </div>
      <div 
        className={`z-10 ${display} bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 w-72`}
        style={{
          position: "absolute",
          inset: "0px auto auto 0px",
          margin: 0,
          transform: "translate(31px, 59px)"
        }}
      >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
        {
          //TODO: When tickers lenght say that no result found
          //change the style
          tickers && tickers.map(ticker => {
            return (
              <SearchItem 
                key={ticker.ticker} 
                name={ticker.name} 
                ticker={ticker.ticker}
                setDisplay={setDisplay}
              />
            )
          })
        }
        </ul>
      </div>
    </div>
  )
}

export default React.memo(Search)