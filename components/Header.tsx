import Duca from "../app/assets/duca-2.svg";
import Image from "next/image";
import Sig from "../app/assets/sig.svg";
import { BsTwitter } from "react-icons/bs";
import { BiLogoDevTo } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { social } from "@/app/utils/social";

export default function Header() {
  return (
    <>
      <div className="flex flex-col lg:hidden px-4 w-full lg:px-16 py-16">
        <div className="flex justify-start items-center">
          <Image
            src={Duca}
            alt="Duca"
            height={3000}
            width={3000}
            className="h-32 w-32 lg:h-24 lg:w-24 -ml-6"
          />
        </div>

        <div className="bg-black rounded-xl w-full text-white py-4 px-10 flex h-40 justify-center">
          <div className="flex gap-x-8 justify-center items-center">
            <a href={social.twitter}>
              <BsTwitter className={"h-12 w-12 lg:h-12 lg:w-12 text-white"} />
            </a>
            <a href={social.devto}>
              <BiLogoDevTo className={"h-12 w-12 lg:h-12 lg:w-12 text-white"} />
            </a>
            <a href="https://sigcoding.com">
              <Image
                src={Sig}
                alt="Sig"
                height={300}
                width={300}
                className="h-12 w-12 lg:h-12 lg:w-12"
              />
            </a>
            <a href={social.github}>
              <AiFillGithub
                className={"h-12 w-12 lg:h-12 lg:w-12 text-white"}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex px-4 w-full lg:px-32 py-16">
        <div className="bg-black rounded-xl w-full text-white py-4 px-10 flex h-40 justify-between">
          <div className="flex justify-center items-center">
            <Image
              src={Duca}
              alt="Duca"
              height={3000}
              width={3000}
              className="h-10 w-10 lg:h-24 lg:w-24"
            />
          </div>

          <div className="flex gap-x-8 justify-center items-center">
            <a href={social.twitter}>
              <BsTwitter className={"h-6 w-6 lg:h-12 lg:w-12 text-white"} />
            </a>
            <a href={social.devto}>
              <BiLogoDevTo className={"h-6 w-6 lg:h-12 lg:w-12 text-white"} />
            </a>
            <a href="https://sigcoding.com">
              <Image
                src={Sig}
                alt="Sig"
                height={300}
                width={300}
                className="h-6 w-6 lg:h-12 lg:w-12"
              />
            </a>
            <a href={social.github}>
              <AiFillGithub className={"h-6 w-6 lg:h-12 lg:w-12 text-white"} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
