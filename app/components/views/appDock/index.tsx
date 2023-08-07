import Image from "next/image";

export default function AppDock() {
  return (
    <div className="px-8 rounded-xl bg-opacity-75 backdrop-blur-md border border-black/10 shadow-inner shadow-white/10">
      <div className="py-1 px-8 flex items-center">
        <Image
          src={
            "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png"
          }
          alt="Finder"
          height={200}
          width={200}
          className="h-20 w-20"
        />

        <Image
          src={
            "https://i.ibb.co/4Sc24c9/Launchpad-back-to-Dock-tutorial-removebg-preview.png"
          }
          alt="Launchpad"
          height={200}
          width={200}
          className="h-20 w-auto"
        />

        <Image
          src={
            "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png"
          }
          alt="Launchpad"
          height={200}
          width={200}
          className="h-[4.5rem] w-auto"
        />

        <div className="bg-white bg-opacity-75 rounded-2xl py-[0.6rem] px-1 ml-10">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Arc_%28browser%29_logo.svg/800px-Arc_%28browser%29_logo.svg.png"
            }
            alt="Arc"
            height={200}
            width={200}
            className="h-[3.3rem] w-auto"
          />
        </div>

        <Image
          src={
            "https://i.ibb.co/Ph1Wk1b/86617214-8c5d5c00-bf7c-11ea-829b-61ee649e5a6c-removebg-preview.png"
          }
          alt="VsCode"
          height={200}
          width={200}
          className="h-20 w-auto ml-10"
        />
      </div>
    </div>
  );
}
