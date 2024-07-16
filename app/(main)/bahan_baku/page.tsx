import TopContent from "@/components/top-content";
import SearchBar from "@/components/searchBar";
import Head from "@/components/head";
import TableBahan from "./TableBahan";
import { Button } from "@/components/Button";

export default function Page() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
      <TopContent />
      <Head>
        <Button>Riwayat Bahan Baku</Button>
        <Button>Tambah Bahan Baku</Button>
      </Head>
      {/* <SearchBar /> */}
      <div className="flex overflow-hidden">
        <div className="flex-1  flex flex-row overflow-auto">
          <TableBahan />
        </div>
      </div>
    </div>
  );
}
