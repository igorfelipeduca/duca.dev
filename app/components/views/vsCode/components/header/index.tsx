import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { DiReact } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import localFont from "next/font/local";

const sfRegular = localFont({
  src: "../../../../../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_regular.woff2",
});

export default function VsCodeHeader() {
  return (
    <div className="py-3 px-4 flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <div className="h-3 w-3 p-1 rounded-full bg-red-500">
          <div className="h-1 w-1 bg-red-900 rounded-full" />
        </div>

        <div className="h-3 w-3 p-1 rounded-full bg-yellow-500" />

        <div className="h-3 w-3 p-1 rounded-full bg-green-500" />
      </div>

      <div className="flex gap-x-4">
        <div className="flex items-center gap-x-2">
          <BsArrowLeft className="h-5 w-6 text-zinc-400" />
          <BsArrowRight className="h-5 w-6 text-zinc-600" />
        </div>

        <div className="bg-gray-900/50 border border-zinc-700 rounded-lg py-1 flex justify-center items-center w-[30rem]">
          <PiMagnifyingGlassLight className="h-6 w-auto text-zinc-500" />
          <h3 className={`text-zinc-500 text-md ml-2 ${sfRegular.className}`}>
            duca-portfolio
          </h3>
        </div>
      </div>

      <div className="flex gap-x-3 items-center">
        <DiReact className="h-5 w-6 text-zinc-400" />
        <BiLogoTailwindCss className="h-5 w-6 text-zinc-400" />
        <BiLogoTypescript className="h-5 w-6 text-zinc-400" />
        <TbBrandNextjs className="h-5 w-6 text-zinc-400" />
      </div>
    </div>
  );
}
