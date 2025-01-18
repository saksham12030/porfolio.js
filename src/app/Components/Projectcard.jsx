import React from 'react';
import Link from "next/link";
import {CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline"
const Projectcard = ({imgurl,title,description,giturl,previewurl}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 relative group rounded-t-xl"
        style={{ background: `url(${imgurl})`, backgroundSize: "cover" }}
      >
        <div className="overlay top-0 left-0  items-center justify-center absolute w-full h-full bg-[#181818] group-hover:bg-opacity-80 group-hover:flex transition-all duration-500 hidden ">
          <Link
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] mr-2 group/link hover:border-white"
            href={giturl}
          >
            <CodeBracketIcon className="h-10  w-10 text-[#ADB7BE]   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  absolute cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            className="h-14 w-14 border-2 group/link relative  rounded-full border-[#ADB7BE] hover:border-white"
            href={previewurl}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  absolute cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}

export default Projectcard