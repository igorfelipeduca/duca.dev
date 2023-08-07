import { GoCode, GoCopilot } from "react-icons/go";
import { BiGitBranch, BiCloudUpload, BiComment } from "react-icons/bi";
import { FiGitBranch } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { IoWarningOutline } from "react-icons/io5";
import { BsBell, BsCheck2All } from "react-icons/bs";
import { SlRocket } from "react-icons/sl";
import { CiStreamOn } from "react-icons/ci";
import { PiBracketsCurlyBold } from "react-icons/pi";

export default function VsCodeFooter() {
  return (
    <div className="flex items-center justify-between h-8">
      <div className="flex items-center h-full">
        <div className="w-10 bg-teal-300 text-teal-800 flex items-center justify-center h-full">
          <GoCode className={"h-5 w-5"} />
        </div>

        <div className="flex gap-x-2">
          <div className="flex items-center px-1 gap-x-1">
            <BiGitBranch className={"text-zinc-500 h-5 w-5"} />
            <span className="text-zinc-500 text-sm">feat/editor*</span>
          </div>

          <BiCloudUpload className={"text-zinc-500 h-5 w-5"} />

          <FiGitBranch className={"text-zinc-500 h-5 w-5 ml-2"} />

          <div className="ml-2 flex items-center">
            <AiOutlineCloseCircle className={"text-zinc-500 h-4 w-4"} />
            <span className="text-zinc-500 text-xs ml-1">0</span>

            <div className="ml-2 flex items-center">
              <IoWarningOutline className={"text-zinc-500 h-4 w-4"} />
              <span className="text-zinc-500 text-xs ml-1">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center h-full px-2 gap-x-2">
        <span className="text-zinc-500 text-xs ml-1">Ln, 42, Col 64</span>

        <span className="text-zinc-500 text-xs ml-1">Spaces: 4</span>

        <span className="text-zinc-500 text-xs ml-1">UTF-8</span>

        <span className="text-zinc-500 text-xs ml-1">LF</span>

        <div className="flex items-center gap-x-1 mr-1">
          <PiBracketsCurlyBold className={"text-zinc-500 h-4 w-4"} />
          <span className="text-zinc-500 text-xs ml-1">TypeScript JSX</span>
        </div>

        <div className="flex items-center gap-x-1 mr-1">
          <CiStreamOn className={"text-zinc-500 h-4 w-4"} />
          <span className="text-zinc-500 text-xs ml-1">Go Live</span>
        </div>

        <div className="flex items-center gap-x-1 mr-1">
          <SlRocket className={"text-zinc-500 h-4 w-4"} />
          <span className="text-zinc-500 text-xs ml-1">2y 2h 33m</span>
        </div>

        <div className="flex items-center gap-x-1 mr-1">
          <div className={"bg-zinc-500 h-4 w-4 rounded-full"} />
          <span className="text-zinc-500 text-xs ml-1">Flow</span>
        </div>

        <GoCopilot className={"text-zinc-500 h-4 w-4"} />

        <span className="text-zinc-500 text-xs ml-1">Prettier+</span>

        <div className="flex items-center gap-x-1">
          <BsCheck2All className={"text-zinc-500 h-4 w-4"} />
          <span className="text-zinc-500 text-xs ml-1">Prettier</span>
        </div>

        <BiComment className={"text-zinc-500 h-4 w-4 ml-2"} />
        <BsBell className={"text-zinc-500 h-4 w-4 ml-2"} />
      </div>
    </div>
  );
}
