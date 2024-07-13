// import Sidebar from "@/components/sidebar";
import TopContent from "@/components/top-content";
import TableMenu from "./TableMenu";

export default function AboutPage() {
  
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
        <TopContent />
        {/* <TableMenu /> */}
        <div className="flex overflow-hidden">
          <div className="flex-1  flex flex-row overflow-auto">
            <TableMenu/>
          </div>
        </div>
    </div>
  );
}
