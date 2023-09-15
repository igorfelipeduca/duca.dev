import Image from "next/image";
import Link from "next/link";

interface HighlightContentProps {
  image: string;
  title: string;
  description: string;
  url: string;
}

export default function HighlightContent({
  image,
  title,
  description,
  url,
}: HighlightContentProps) {
  return (
    <>
      <div className="w-full h-96 bg-black rounded-lg text-white pl-16 lg:flex justify-between hidden shadow-xl">
        <div className="py-12">
          <div className="flex items-center">
            <h1 className="w-42 text-5xl font-bold">{title}</h1>
          </div>

          <div className="mt-8 max-w-sm">
            <span className="text-zinc-300">{description}</span>
          </div>

          <a
            href={url}
            className="mt-8 flex items-center font-medium gap-x-2 hover:gap-x-4 transition-all duration-150 ease-linear"
          >
            Continue reading <span>&rarr;</span>
          </a>
        </div>

        <div className="h-full relative w-8/12 rounded-lg">
          <Image
            src={image}
            alt="Unsplash"
            className="h-full w-full object-cover rounded-lg"
            layout="fill"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-lg" />
        </div>
      </div>

      <div className="w-full h-96 bg-black rounded-lg text-white flex flex-col lg:hidden">
        <div className="py-12 pl-8 absolute w-80">
          <div className="flex items-center">
            <h1 className="w-full text-5xl font-bold">Behind this portfolio</h1>
          </div>

          <div className="mt-8 max-w-sm">
            <span className="text-zinc-300">
              A little about how I managed to unite and merge the ideas and
              references to cook this website 🧑‍🍳
            </span>
          </div>

          <Link href="" className="mt-8 flex items-center font-medium">
            Continue reading &rarr;
          </Link>
        </div>

        <div className="h-full relative w-full rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1694384482912-8f8ed20e04a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Unsplash"
            className="h-full w-full object-cover rounded-lg opacity-30"
            layout="fill"
          />

          <div className="mt-72 absolute inset-0 bg-gradient-to-t from-black via-black to-transparent rounded-lg" />
        </div>
      </div>
    </>
  );
}
