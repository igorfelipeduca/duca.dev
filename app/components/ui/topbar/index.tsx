import { AiFillApple } from "react-icons/ai";
import localFont from "next/font/local";
import CollapseTopbarItem from "../collapseTopbarItem";
import { CollapseItem } from "../collapseTopbarItem/collapseTopbarItem";
import { BsBatteryFull } from "react-icons/bs";
import { IoIosWifi } from "react-icons/io";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const sfLight = localFont({
  src: "../../../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_light.woff2",
});

const sfBold = localFont({
  src: "../../../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_bold.woff2",
});

const sigItems: CollapseItem[] = [
  {
    label: "Sig + Gamba",
    value: "sig-gamba",
    href: "https://sigcoding.com/sig-gamba",
  },
];

export default function Topbar() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-400/80 via-yellor-500 to-yellow-400 py-2 px-3 flex justify-between">
      <div className="flex items-center gap-x-6">
        <AiFillApple className={"text-black h-5 w-5"} />

        <h3 className={`font-bold text-sm -ml-2 ${sfBold.className}`}>Duca</h3>
        <CollapseTopbarItem
          text="Sig"
          weight="light"
          className="text-sm cursor-default"
          items={sigItems}
        />
        <a href="https://twitter.com/ducaswtf" target="_blank">
          <h3
            className={`font-bold text-sm cursor-default ${sfLight.className}`}
          >
            Twitter
          </h3>
        </a>
      </div>

      <div className="flex items-center gap-x-4">
        <BsBatteryFull className={"text-black h-5 w-5"} />

        <IoIosWifi className={"text-black h-5 w-5"} />

        <HiMiniMagnifyingGlass className={"text-black h-4 w-4"} />

        <div className="flex gap-x-[0.4rem]">
          <h3
            className={`text-sm cursor-default track-widest ${sfLight.className}`}
          >
            Mon
          </h3>

          <h3
            className={`text-sm cursor-default track-widest ${sfLight.className}`}
          >
            7
          </h3>

          <h3
            className={`text-sm cursor-default track-widest ${sfLight.className}`}
          >
            Aug
          </h3>

          <h3
            className={`text-sm cursor-default track-widest ${sfLight.className}`}
          >
            01:57
          </h3>
        </div>
      </div>
    </div>
  );
}
