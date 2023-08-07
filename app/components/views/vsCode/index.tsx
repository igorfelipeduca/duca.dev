import VsCodeExplorer from "./components/explorer";
import VsCodeHeader from "./components/header";
import VsCodeSidebar from "./components/sidebar";

export default function VsCode() {
  return (
    <div className="rounded-lg bg-gray-950 h-screen w-full">
      <VsCodeHeader />

      <div className="flex">
        <VsCodeSidebar />
        <VsCodeExplorer />
      </div>
    </div>
  );
}
