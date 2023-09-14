"use client";

import HighlightContent from "@/components/HighlightContent";
import { Post } from "@/components/Post";
import PostList from "@/components/PostList";
import { IWebsite } from "@/components/Website";
import WebsiteList from "@/components/WebsiteList";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

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
  ];

  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=yelldutz`)
      .then((data) => data.json())
      .then((data) => {
        setDevToPosts(data);
      });
  }, []);

  return (
    <main className="px-4 lg:px-32 pb-16 cursor-normal">
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

      <HighlightContent />

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

        <WebsiteList websites={websites} />
      </section>
    </main>
  );
}
