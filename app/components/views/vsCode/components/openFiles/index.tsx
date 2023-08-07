import { XIcon } from "lucide-react";
import { DiReact } from "react-icons/di";

export default function VsCodeOpenFiles() {
  return (
    <div className="w-full bg-gray-900/75">
      <div className="flex flex-col">
        <div className="w-36 p-2 flex justify-between">
          <div className="flex items-center gap-x-1">
            <DiReact className={"text-sky-600 h-5 w-5"} />

            <h3 className="text-sm text-sky-700 font-medium">TODO.md</h3>
          </div>

          <XIcon className="h-4 w-4 text-white mt-1" />
        </div>

        <div className="w-36 bg-teal-400 h-[0.02rem] mt-1" />
      </div>
    </div>
  );
}
