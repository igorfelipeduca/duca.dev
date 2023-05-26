import { Twitter } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";

import Logo from "./assets/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="px-32 py-16 hidden md:block">
        <div className="flex justify-between">
          <h1 className={`text-black text-2xl font-semibold`}>
            <span className="text-rose-500">{"<"}</span>duca
            <span className="text-rose-500">.</span>dev
            <span className="text-rose-500">{"/>"}</span>
          </h1>

          <div className="flex space-x-4">
            <Link href={"https://twitter.com/ducaswtf"}>
              <Twitter className="h-8 w-8 text-black" />
            </Link>
            <Link href={"https://www.linkedin.com/in/igorfelipeduca/"}>
              <BsLinkedin className="h-8 w-8 text-black" />
            </Link>
            <Link href={"https://sigcoding.com"}>
              <Image className="h-8 w-8" src={Logo} alt="Sig Coding House" />
            </Link>
          </div>
        </div>
      </header>

      <header className="px-32 py-16 block md:hidden">
        <div className="flex justify-center">
          <h1 className={`text-black text-2xl font-semibold`}>
            <span className="text-blue-500">{"<"}</span>duca
            <span className="text-blue-500">.</span>dev
            <span className="text-blue-500">{"/>"}</span>
          </h1>
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex space-x-4">
            <Link href={"https://twitter.com/ducaswtf"}>
              <Twitter className="h-6 w-6 text-black" />
            </Link>
            <Link href={"https://www.linkedin.com/in/igorfelipeduca/"}>
              <BsLinkedin className="h-6 w-6 text-black" />
            </Link>
            <Link href={"https://sigcoding.com"}>
              <Image className="h-6 w-6" src={Logo} alt="Sig Coding House" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
