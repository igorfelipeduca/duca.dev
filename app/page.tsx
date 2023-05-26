import Image from "next/image";
import { Sen, Poppins } from "next/font/google";
import PinterestStackGrid from "./components/StackGrid";
import { DiRuby, DiPython } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Home() {
  return (
    <main className="py-16">
      <div className="px-32 flex justify-between py-8 pb-16">
        <div className="flex flex-col">
          <h1 className={`text-6xl font-bold ${poppins.className}`}>
            Igor F<span className="text-rose-500">.</span> Duca
          </h1>

          <span className="text-zinc-700 font-bold text-2xl">
            Software Engineer
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="p-4 bg-zinc-100/40 shadow-sm rounded-lg">
            <DiRuby className="h-8 w-8 text-rose-500" />
          </div>

          <div className="p-4 bg-zinc-100/40 shadow-sm rounded-lg">
            <DiPython className="h-8 w-8 text-rose-500" />
          </div>

          <div className="p-4 bg-zinc-100/40 shadow-sm rounded-lg">
            <TbBrandNextjs className="h-8 w-8 text-rose-500" />
          </div>
        </div>
      </div>

      <div className="px-32">
        <PinterestStackGrid />
      </div>
    </main>
  );
}
