import Image from "next/image";
import VsCode from "./components/views/vsCode";
import AppDock from "./components/views/appDock";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <VsCode />

      <div className="mt-2 px-16">
        <AppDock />
      </div>
    </main>
  );
}
