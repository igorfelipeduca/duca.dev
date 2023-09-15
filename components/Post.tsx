"use client";

import Image from "next/image";
import { useState } from "react";
import { BiLogoDevTo } from "react-icons/bi";
import { BsDribbble } from "react-icons/bs";

export interface Post {
  cover_image: string;
  title: string;
  description: string;
  user: User;
  url: string;
  posted_on: string;
}

export interface User {
  name: string;
  profile_image: string;
}

export default function Post({
  cover_image,
  title,
  user,
  url,
  description,
  posted_on,
}: Post) {
  const [imageSize, setImageSize] = useState<number>(64);

  const PostedOnLogo = () => {
    if (posted_on === "dribbble") {
      return <BsDribbble className="h-5 w-5 text-zinc-200 ml-1" />;
    } else {
      return <BiLogoDevTo className="h-6 w-6 text-zinc-200 ml-1" />;
    }
  };

  return (
    <a
      href={url}
      className="h-72 w-[22rem] lg:h-96 lg:w-[32rem] rounded-lg bg-black shadow-lg flex flex-col relative "
      onMouseEnter={() => setImageSize(72)}
      onMouseLeave={() => setImageSize(64)}
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
        <div className="pt-64">
          <h1 className="text-white text-lg w-[20rem] font-bold">{title}</h1>
        </div>

        <div className="mt-auto flex items-center gap-x-2 pb-4 pt-4">
          <Image
            alt={user.name}
            src={user.profile_image}
            width={300}
            height={300}
            className="h-10 w-10 rounded-lg"
          />
          <h3 className="text-zinc-200 font-bold flex items-center">
            {user.name} on <PostedOnLogo />
          </h3>
        </div>
      </div>
    </a>
  );
}
