import VsCodeHeader from "./components/header";
import VsCodeSidebar from "./components/sidebar";

export default function VsCode() {
  return (
    <div className="rounded-lg bg-gray-950 h-screen w-full">
      <VsCodeHeader />
      <VsCodeSidebar />
    </div>
  );
}
