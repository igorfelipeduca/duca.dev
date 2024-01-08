"use client";

import HighlightContent from "@/components/HighlightContent";
import { Post } from "@/components/Post";
import PostList from "@/components/PostList";
import { IWebsite } from "@/components/Website";
import WebsiteList from "@/components/WebsiteList";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { BiCoffee } from "react-icons/bi";

export default function Home() {
  const [devToPosts, setDevToPosts] = useState<Post[]>([]);

  const dribbblePosts: Post[] = [
    {
      cover_image:
        "https://cdn.dribbble.com/userupload/10051445/file/original-a36442b5f72f0952f312cd77c450fe4c.png?resize=1024x576",
      title: "Some superficial dive into branding",
      description:
        "In this Shot I want to talk a little about how I managed to create my own new visual identity using only Figma.",
      user: {
        name: "Igor Duca",
        profile_image:
          "https://cdn.dribbble.com/users/16532870/avatars/normal/18400fa74e72ce492e63dcfdd13c8fbe.png?1694659849",
      },
      url: "https://dribbble.com/shots/22553498-Some-superficial-dive-into-branding",
      posted_on: "dribbble",
    },
  ];

  const websites: IWebsite[] = [
    {
      title: "Sig",
      url: "https://sigcoding.com",
      cover_image:
        "https://i.ibb.co/MnSfcQx/Screenshot-2023-09-14-at-01-29-11.png",
      stack: "Next.js, TailwindCSS, TypeScript, Vercel",
    },
    {
      title: "doebem",
      url: "https://doebem.sigcoding.com",
      cover_image:
        "https://i.ibb.co/1mY6XhW/Screenshot-2023-09-14-at-01-32-30.png",
      stack: "Next.js, TailwindCSS, TypeScript, Vercel",
    },
    {
      title: "Biome - Landing Page",
      url: "https://biome.sigcoding.com",
      cover_image:
        "https://i.ibb.co/fXC4sGW/Screenshot-2023-09-14-at-01-34-21.png",
      stack: "Next.js, TailwindCSS, TypeScript, Vercel",
    },
    {
      title: "Duca - Building Blocks",
      url: "https://duca.mintlify.app",
      cover_image:
        "https://i.ibb.co/RbXcJkC/Screenshot-2024-01-07-at-01-08-57.png",
      stack: "Mintlify",
    },
  ];

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=yelldutz`)
      .then((data) => data.json())
      .then((data) => {
        setDevToPosts(data);
      });
  }, []);

  return (
    <main className="px-4 lg:px-16 pb-16 cursor-normal animate-page-loaded">
      <NextSeo
        title="Duca - Software Engineer"
        description="Software Engineer and passionate for UI/UX - I try to build some cool stuff"
        canonical="https://duca.dev"
        openGraph={{
          url: "https://duca.dev",
          title: "Duca - Software Engineer",
          description:
            "Software Engineer and passionate for UI/UX - I try to build some cool stuff",
          images: [
            {
              url: "https://cdn.dribbble.com/userupload/10051445/file/original-a36442b5f72f0952f312cd77c450fe4c.png?resize=1024x576",
              width: 1024,
              height: 576,
              alt: "Duca - Software Engineer",
              type: "image/png",
            },
          ],
          siteName: "Duca.dev",
        }}
        twitter={{
          handle: "@sigcoding",
          site: "https://duca.dev",
          cardType: "summary_large_image",
        }}
      />

      <div className="flex justify-end pb-4">
        <a
          href="https://pixmeacoffee.vercel.app/ducaswtf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-black text-white border flex items-center gap-x-2 transition-all duration-150 ease-linear hover:bg-zinc-800"
        >
          <BiCoffee className={"h-5 w-5"} />
          Pix me a coffee
        </a>
      </div>

      <HighlightContent
        image="https://res.cloudinary.com/practicaldev/image/fetch/s--8X6NwbOq--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/617gplvxatos4um539xj.jpg"
        title="Talking about UI planning"
        description="The basics of planning a UI is for you to understand why things look and work the way they do."
        url="https://dev.to/yelldutz/some-food-for-thought-about-planning-interfaces-51fl"
      />

      <section id="articles" className="mt-16">
        <h1 className="text-4xl text-black font-bold mb-8">
          Published Articles
        </h1>

        <PostList posts={devToPosts} />
      </section>

      <section id="dribbble" className="mt-16">
        <h1 className="text-4xl text-black font-bold mb-8">
          Dribble Shots | UI/UX
        </h1>

        <PostList posts={dribbblePosts} />
      </section>

      <section id="websites" className="mt-16">
        <h1 className="text-4xl text-black font-bold mb-8">Websites</h1>

        <WebsiteList websites={websites.reverse()} />
      </section>
    </main>
  );
}
