import Duca from "../app/assets/duca-1.svg";
import Image from "next/image";
import Sig from "../app/assets/sig.svg";
import { BsTwitter } from "react-icons/bs";
import { BiLogoDevTo } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { social } from "@/app/utils/social";

export default function Footer() {
  return (
    <>
      <div className="hidden lg:flex px-4 w-full lg:px-32 py-16">
        <div className="rounded-xl w-full text-black py-4 px-10 flex h-40 justify-between">
          <div className="flex justify-center items-center">
            <Image
              src={Duca}
              alt="Duca"
              height={3000}
              width={3000}
              className="h-10 w-10 lg:h-24 lg:w-24"
            />
          </div>

          <div className="flex items-center gap-x-8">
            <Link href={"#articles"} className="text-black font-bold text-lg">
              Articles
            </Link>
            <Link href={"#dribbble"} className="text-black font-bold text-lg">
              Dribbble
            </Link>
            <Link href={"#websites"} className="text-black font-bold text-lg">
              Websites
            </Link>
          </div>

          <div className="flex gap-x-8 justify-center items-center">
            <a href={social.twitter}>
              <BsTwitter className={"h-6 w-6 lg:h-12 lg:w-12 text-black"} />
            </a>
            <a href={social.devto}>
              <BiLogoDevTo className={"h-6 w-6 lg:h-12 lg:w-12 text-black"} />
            </a>
            <a href="https://sigcoding.com">
              <Image
                src={Sig}
                alt="Sig"
                height={300}
                width={300}
                className="h-6 w-6 lg:h-12 lg:w-12 invert"
              />
            </a>
            <a href={social.github}>
              <AiFillGithub className={"h-6 w-6 lg:h-12 lg:w-12 text-black"} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden px-4 w-full lg:px-32 py-16">
        <div className="rounded-xl w-full text-black py-4 px-10 flex h-40 justify-center">
          <div className="flex gap-x-8 justify-center items-center">
            <a href={social.twitter}>
              <BsTwitter className={"h-12 w-12 lg:h-12 lg:w-12 text-black"} />
            </a>
            <a href={social.devto}>
              <BiLogoDevTo className={"h-12 w-12 lg:h-12 lg:w-12 text-black"} />
            </a>
            <a href="https://sigcoding.com">
              <Image
                src={Sig}
                alt="Sig"
                height={300}
                width={300}
                className="h-12 w-12 lg:h-12 lg:w-12 invert"
              />
            </a>
            <a href={social.github}>
              <AiFillGithub
                className={"h-12 w-12 lg:h-12 lg:w-12 text-black"}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
