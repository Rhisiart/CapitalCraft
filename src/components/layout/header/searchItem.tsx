import Link from "next/link";
import React from "react";

interface IProps {
  name: string,
  ticker: string
}


const SearchItem : React.FC<IProps> = ({ name, ticker }) => {
  return(
    <li>
      <Link
        href={`/quote/${ticker}`}
        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        {name}
      </Link>
    </li>
  )
}

export default React.memo(SearchItem)