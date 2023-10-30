import Image from "next/image";
import React from "react";
import Section from "./section";

interface IProps {

}


const Sidebar : React.FC<IProps> = ({}) => {
  return(
    <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
      <div className="pb-4 px-10 overflow-y-auto gap-y-9 flex flex-col">
        <div className="items-center shrink-0 h-20 flex border-b-2 border-gray-200">
          <Image
            width={50}
            height={50}
            src="/vercel.svg"
            alt="logo"
          />
        </div>
        <nav className="flex flex-col flex-1">
          <Section/>
        </nav>
      </div>
    </div>
  )
}

export default React.memo(Sidebar)