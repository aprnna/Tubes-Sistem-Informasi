// import Sidebar from "@/components/sidebar";
import TopContent from "@/components/top-content";
import TableMenu from "./TableMenu";
import Head from "@/components/head";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
      <TopContent />
      {/* <TableMenu /> */}
      <Head>
        <Button>Tambah Menu</Button>
      </Head>
      <div className="flex overflow-hidden">
        <div className="flex-1  flex flex-row overflow-auto">
          <TableMenu />
        </div>
      </div>
    </div>
  );
}
