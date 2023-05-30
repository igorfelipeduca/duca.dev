import Image from "next/image";
import { Sen, Poppins } from "next/font/google";
import PinterestStackGrid from "./components/StackGrid";
import { DiRuby, DiPython } from "react-icons/di";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import MobilePinterestGrid from "./components/MobileStackGrid";
import { ChevronsDown } from "lucide-react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Home() {
  return (
    <>
      <main className="py-16 hidden md:block">
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
              <TbBrandTypescript className="h-8 w-8 text-rose-500" />
            </div>

            <div className="p-4 bg-zinc-100/40 shadow-sm rounded-lg">
              <TbBrandNextjs className="h-8 w-8 text-rose-500" />
            </div>
          </div>
        </div>

        <div className="px-32">
          <PinterestStackGrid />
        </div>

        <div className="flex justify-center pt-16 pb-32">
          <ChevronsDown className="h-10 w-10 text-rose-500" />
        </div>

        <div className="flex space-x-16 px-72">
          <div className="p-1 border-2 rounded-full border-rose-500 flex items-center justify-center">
            <Image
              alt="Igor F. Duca"
              src={
                "https://i.ibb.co/3cfG1Vh/Whats-App-Image-2023-05-24-at-18-39-54.jpg"
              }
              height={300}
              width={300}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">About me</h1>

            <div className="mt-8 w-[32rem] text-zinc-700 flex flex-col space-y-4">
              <p>
                My name is Igor Felipe Duca and I am a back-end developer with 6
                years of experience with code. My main stack is:{" "}
                <span className="text-rose-500">Python</span>,{" "}
                <span className="text-rose-500">Ruby on Rails</span>,{" "}
                <span className="text-rose-500">TypeScript</span>,{" "}
                <span className="text-rose-500">Next.Js</span>
              </p>

              <p>
                I work as a professional developer for{" "}
                <span className="text-rose-500 underline">2 years</span> now and
                I am passionate for studying development and working in as more
                different projects as I can.
              </p>

              <p>Learn more about me at:</p>

              <div className="flex items-center space-x-4">
                <Link
                  href={"https://www.linkedin.com/in/igorfelipeduca/"}
                  className="py-2 px-4 bg-zinc-100/40 border border-rose-500 rounded-lg flex items-center"
                >
                  <BsLinkedin className="h-6 w-6 text-rose-500 mr-2" /> LinkedIn
                </Link>

                <Link
                  href={"https://twitter.com/ducaswtf"}
                  className="py-2 px-4 bg-zinc-100/40 border border-rose-500 rounded-lg flex items-center"
                >
                  <BsTwitter className="h-6 w-6 text-rose-500 mr-2" /> Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className="py-8 block md:hidden">
        <div className="px-8 flex flex-col py-8 pb-16">
          <div className="flex flex-col">
            <h1 className={`text-4xl font-bold ${poppins.className}`}>
              Igor F<span className="text-blue-500">.</span> Duca
            </h1>

            <span className="text-zinc-700 font-bold text-2xl">
              Software Engineer
            </span>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="p-4 bg-zinc-100/40 shadow-sm rounded-lg">
              <DiRuby className="h-8 w-8 text-blue-500" />
            </div>

            <div className="p-4 bg-zinc-100/40 shadow-sm rounded-lg">
              <DiPython className="h-8 w-8 text-blue-500" />
            </div>

            <div className="p-4 bg-zinc-100/40 shadow-sm rounded-lg">
              <TbBrandNextjs className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="px-32">
          <MobilePinterestGrid />
        </div>

        <div className="flex flex-col px-12 py-16">
          <h1 className="text-2xl font-bold">About me</h1>

          <div className="mt-8">
            <div className="text-zinc-700 flex flex-col space-y-4">
              <p>
                My name is Igor Felipe Duca and I am a back-end developer with 6
                years of experience with code. My main stack is:{" "}
                <span className="text-rose-500">Python</span>,{" "}
                <span className="text-rose-500">Ruby on Rails</span>,{" "}
                <span className="text-rose-500">TypeScript</span>,{" "}
                <span className="text-rose-500">Next.Js</span>
              </p>

              <p>
                I work as a professional developer for{" "}
                <span className="text-rose-500 underline">2 years</span> now and
                I am passionate for studying development and working in as more
                different projects as I can.
              </p>

              <p>Learn more about me at:</p>

              <div className="flex items-center space-x-4">
                <Link
                  href={"https://www.linkedin.com/in/igorfelipeduca/"}
                  className="py-2 px-4 bg-zinc-100/40 border border-rose-500 rounded-lg flex items-center"
                >
                  <BsLinkedin className="h-6 w-6 text-rose-500 mr-2" /> LinkedIn
                </Link>

                <Link
                  href={"https://twitter.com/ducaswtf"}
                  className="py-2 px-4 bg-zinc-100/40 border border-rose-500 rounded-lg flex items-center"
                >
                  <BsTwitter className="h-6 w-6 text-rose-500 mr-2" /> Twitter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
