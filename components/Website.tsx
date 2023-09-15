"use client";

import Image from "next/image";
import { useState } from "react";

export interface IWebsite {
  title: string;
  url: string;
  cover_image: string;
  stack: string;
}

export interface User {
  name: string;
  profile_image: string;
}

export default function Website({ title, url, cover_image, stack }: IWebsite) {
  const [imageSize, setImageSize] = useState<number>(64);

  return (
    <a
      href={url}
      className="h-72 w-[22rem] lg:h-96 lg:w-[32rem] rounded-lg bg-black shadow-lg flex flex-col relative"
    >
      <div className="relative">
        <Image
          src={cover_image}
          alt={title}
          className={`h-${imageSize} object-cover rounded-lg transition-all duration-150 ease-linear`}
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end px-4">
        <div className="pb-8">
          <h1 className="text-white text-3xl w-[20rem] font-bold">{title}</h1>

          <div className="mt-4">
            <span className="text-md text-zinc-400">{stack}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
