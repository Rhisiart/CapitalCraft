import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  name: string,
  svg: string,
  alt: string,
  page: string
}


const Category : React.FC<IProps> = ({name, svg, alt, page}) => {
  return(
    <li>
      <Link href={page} className="flex leading-6 font-semibold text-sm p-2 rounded-md gap-3">
        <Image 
          src={svg}
          width={24}
          height={24}
          alt={alt}
        />
        {name}
      </Link>
    </li>
  )
}

export default React.memo(Category)