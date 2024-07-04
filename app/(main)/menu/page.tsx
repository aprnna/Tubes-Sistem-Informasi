import { title } from "@/components/primitives";
// import Sidebar from "@/components/sidebar";
import TableMenu from "./TableMenu"; // Import the client-side component
import TopContent from "@/components/top-content";
import MenuCards from "./menuCards";

export default function AboutPage() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
      <TopContent />
      {/* <TableMenu /> */}
      <div className="flex-1 overflow-y-auto">
        <MenuCards />
      </div>
    </div>
  );
}
