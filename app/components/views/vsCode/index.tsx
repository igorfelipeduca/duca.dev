import VsCodeEditor from "./components/editor";
import VsCodeExplorer from "./components/explorer";
import VsCodeFooter from "./components/footer";
import VsCodeHeader from "./components/header";
import VsCodeOpenFiles from "./components/openFiles";
import VsCodeSidebar from "./components/sidebar";

export default function VsCode() {
  return (
    <div className="rounded-lg bg-gray-950 h-auto">
      <VsCodeHeader />

      <div className="flex flex-col h-full">
        <div className="flex">
          <VsCodeSidebar />
          <VsCodeExplorer />
          <div className="ml-2 w-full flex flex-col">
            <VsCodeOpenFiles />

            <div className="h-full">
              <VsCodeEditor />
            </div>
          </div>
        </div>
      </div>

      <VsCodeFooter />
    </div>
  );
}
