import { BiLogoMarkdown } from "react-icons/bi";
import localFont from "next/font/local";

const consolas = localFont({
  src: "../../../../../assets/fonts/Consolas.woff",
});

export default function VsCodeEditor() {
  return (
    <div className={`h-full bg-gray-900/75 ${consolas.className}`}>
      <div className="flex items-center gap-x-1 p-2">
        <BiLogoMarkdown className={"h-5 w-5 text-sky-700"} />
        <span className="text-gray-500 text-sm">TODO.md</span>
      </div>

      <div className="pt-4">
        <div className="flex items-center gap-x-4 w-full bg-zinc-950/40 px-8">
          <span className="text-lg font-medium text-gray-600">1</span>

          <div className={`flex items-center gap-x-2 text-lg`}>
            <span className="text-green-500">#</span>
            <span className="text-yellow-500">Duca.dev</span>
          </div>
        </div>

        <div className="flex items-center gap-x-4 w-full px-8">
          <span className="text-lg font-medium text-gray-600">2</span>
        </div>

        <div className="flex items-center gap-x-4 w-full px-8">
          <span className="text-lg font-medium text-gray-600">3</span>

          <div className={`flex items-center gap-x-2 text-lg`}>
            <span className="text-green-500">##</span>
            <span className="bg-gray-400 text-black rounded-lg px-1">TODO</span>
            <span className="text-yellow-500 -ml-2">:</span>
            <span className="text-yellow-500">Add more pages</span>
          </div>
        </div>

        <div className="flex items-center gap-x-4 w-full px-8">
          <span className="text-lg font-medium text-gray-600">4</span>

          <div className={`flex items-center gap-x-2 text-lg`}>
            <span className="text-green-500">##</span>
            <span className="bg-gray-400 text-black rounded-lg px-1">TODO</span>
            <span className="text-yellow-500 -ml-2">:</span>
            <span className="text-yellow-500">Add more dock apps</span>
          </div>
        </div>
      </div>
    </div>
  );
}
