import { BsChevronDown } from "react-icons/bs";
import { BiLogoMarkdown } from "react-icons/bi";
import ExplorerItem from "./components/item";

export default function VsCodeExplorer() {
  return (
    <div className="flex flex-col w-48 mt-2 ml-2">
      <div className="flex justify-between">
        <h3 className="ml-6 text-zinc-400 text-sm uppercase">Explorer</h3>
        <h3 className="ml-6 text-gray-600 tracking-widest text-sm">...</h3>
      </div>

      <div className="mt-4 flex items-center">
        <BsChevronDown className={"h-4 w-4 text-white"} />
        <h3 className="ml-2 text-gray-600 text-sm font-bold uppercase">
          Duca-Portfolio
        </h3>
      </div>

      <div className="flex w-full items-center justify-between">
        <ExplorerItem className="ml-6 mt-2">
          <BiLogoMarkdown className={"h-5 w-5 text-sky-600"} />
          <h3 className="text-teal-400 font-medium text-sm">TODO.md</h3>
        </ExplorerItem>

        <h3 className="text-teal-400 font-medium text-sm mt-2 mr-2">M</h3>
      </div>
    </div>
  );
}
