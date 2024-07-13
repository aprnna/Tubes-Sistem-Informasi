import { title } from "@/components/primitives";
import TopContent from "@/components/top-content";
import { CartProvider } from "../pesanan/allContext";
import SearchBar from "@/components/searchBar";
// import Sidebar from "@/components/sidebar";

export default function AboutPage() {
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
        <TopContent/>
        <CartProvider>
          <SearchBar/>
        </CartProvider>
    </div>
  );
}
