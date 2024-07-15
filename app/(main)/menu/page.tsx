// import Sidebar from "@/components/sidebar";
import TopContent from "@/components/top-content";
import TableMenu from "./TableMenu";
import Head from "@/components/head";

export default function AboutPage() {
  
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
        <TopContent />
        {/* <TableMenu /> */}
        <Head tambahButton={true}/>
        <div className="flex overflow-hidden">
          <div className="flex-1  flex flex-row overflow-auto">
            <TableMenu/>
          </div>
        </div>
    </div>
  );
}
