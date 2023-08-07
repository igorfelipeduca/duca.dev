import { AiFillApple } from "react-icons/ai";
import localFont from "next/font/local";
import CollapseTopbarItem from "../collapseTopbarItem";
import { CollapseItem } from "../collapseTopbarItem/collapseTopbarItem";

const sfRegular = localFont({
  src: "../../../assets/fonts/sf-pro/SF-Pro-Display/sf-pro-display_regular.woff2",
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
    <div className="w-full bg-gradient-to-r from-orange-400/80 via-yellor-500 to-yellow-400 py-2 px-3 flex items-center gap-x-6">
      <AiFillApple className={"text-black h-5 w-5"} />

      <h3 className={`font-bold text-sm -ml-2 ${sfBold.className}`}>Duca</h3>
      <CollapseTopbarItem
        text="Sig"
        weight="regular"
        className="text-sm cursor-default"
        items={sigItems}
      />
      <a href="https://twitter.com/ducaswtf" target="_blank">
        <h3
          className={`font-bold text-sm cursor-default ${sfRegular.className}`}
        >
          Twitter
        </h3>
      </a>
    </div>
  );
}
