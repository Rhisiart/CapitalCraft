import { IQuote } from "@/model/model";
import instance from "@/services/instance";
import Image from "next/image";
import React from "react";

interface IProps {

}


const Search : React.FC<IProps> = async ({}) => {
  const { data } = await instance.get<IQuote[]>("companies");

  return(
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Image 
              src="search.svg"
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
              className="bg-violet-75/40 block w-72 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" 
              placeholder="Search symbol, companies..." 
              required 
            />
          </div>
        </div>
      </div>
    </form>
  )
}

export default React.memo(Search)