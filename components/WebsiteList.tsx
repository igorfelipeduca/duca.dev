"use client";

import Post, { Post as IPost } from "./Post";
import Website, { IWebsite } from "./Website";

interface WebsiteListProps {
  websites: IWebsite[];
}

export default function WebsiteList({ websites }: WebsiteListProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col lg:grid lg:grid-cols-4 gap-y-8 w-full">
        {websites.map((website, index) => (
          <Website
            key={index}
            cover_image={website.cover_image}
            title={website.title}
            url={website.url}
            stack={website.stack}
          />
        ))}
      </div>
    </div>
  );
}
