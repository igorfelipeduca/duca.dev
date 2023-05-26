"use client";

import { Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DiGithub } from "react-icons/di";
import StackGrid from "react-stack-grid";

export default function PinterestStackGrid() {
  return (
    <StackGrid columnWidth={500}>
      <Link href={"https://thelandlending.com"} key="key1">
        <div className="w-[30rem] h-[30rem] bg-gray-300 shadow-2xl">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="https://i.ibb.co/xgk6kr2/Screenshot-from-2023-05-26-12-16-46.png"
                alt="Imagem"
                className="w-full h-full"
                height={300}
                width={300}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white text-center">
              <div className="flex items-center space-x-2 text-white font-semibold">
                <LinkIcon className="h-6 w-6" /> <span>The Land Lending</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"https://lotsmojo.com"} key="key2">
        <div className="w-[30rem] h-[30rem] bg-gray-300 shadow-2xl">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="https://i.ibb.co/PFgTh9H/Screenshot-from-2023-05-26-12-41-55.png"
                alt="Imagem"
                className="w-full h-full"
                height={300}
                width={300}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white text-center">
              <div className="flex items-center space-x-2 text-white font-semibold">
                <LinkIcon className="h-6 w-6" /> <span>Lots Mojo</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <Link href={"https://github.com/igorfelipeduca/ruby-nasa-api"} key="key3">
        <div className="w-[30rem] h-[30rem] shadow-2xl bg-zinc-800">
          <div className="relative w-full h-full">
            <div className="flex justify-center h-full items-center">
              <DiGithub className="h-64 w-64 text-white" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white text-center">
              <div className="flex items-center space-x-2 text-white font-semibold">
                <LinkIcon className="h-6 w-6" />{" "}
                <span>Ruby NASA Api - Check at GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </StackGrid>
  );
}
