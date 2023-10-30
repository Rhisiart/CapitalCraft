import React from "react";

interface IProps {
  name : string,
  value: string
}


const Keystatsrow : React.FC<IProps> = ({name, value}) => {
  return(
    <tr>
      <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent dark:border-white/40">
        <div className="flex px-2 py-0">
          <h6 className="mb-0 text-sm leading-normal dark:text-white">{name}</h6>
        </div>
      </td>
      <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent dark:border-white/40 dark:text-white/60">
        <span className="text-xs font-semibold leading-tight">{value}</span>
      </td>
    </tr>
  )
}

export default React.memo(Keystatsrow)