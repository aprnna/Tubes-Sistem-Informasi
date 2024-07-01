import { title } from "@/components/primitives";
import Sidebar from "@/components/sidebar";
import TableMenu from "./TableMenu"; // Import the client-side component

export default function AboutPage() {
  return (
    <div className="w-full h-screen bg-slate-50 flex">
      <TableMenu />
    </div>
  );
}
