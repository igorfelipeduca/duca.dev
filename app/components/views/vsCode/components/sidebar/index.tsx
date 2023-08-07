import { BsFiles } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { BiGitBranch } from "react-icons/bi";
import { AiOutlineBug } from "react-icons/ai";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { DiVim } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

export default function VsCodeSidebar() {
  return (
    <div className="h-full w-32 flex flex-col gap-y-4">
      <div className="flex items-center">
        <div className="h-14 bg-zinc-400 w-[0.1rem] mr-3" />
        <BsFiles className={"h-8 w-8 text-zinc-500"} />
      </div>

      <HiMiniMagnifyingGlass className={"h-8 w-8 text-zinc-500 ml-4"} />

      <div className="flex">
        <BiGitBranch className={"h-9 w-9 text-zinc-500 ml-4 mt-2"} />
        <span className="mt-7 -ml-4 h-4 w-4 text-xs text-center bg-teal-300 text-black rounded-full">
          4
        </span>
      </div>

      <AiOutlineBug className={"h-8 w-8 text-zinc-500 ml-4 mt-3"} />

      <LiaPuzzlePieceSolid className={"h-9 w-9 text-zinc-500 ml-4 mt-3"} />

      <DiVim className={"h-9 w-9 text-zinc-500 ml-4 mt-3"} />

      <FaDocker className={"h-9 w-9 text-zinc-500 ml-4 mt-3"} />

      <FiFigma className={"h-9 w-9 text-zinc-500 ml-4 mt-3"} />
    </div>
  );
}