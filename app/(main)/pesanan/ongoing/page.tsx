import { title } from "@/components/primitives";
import TopContent from "@/components/top-content";
import OrderCards from "../orderCards";

export default function AboutPage() {
  
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
        <TopContent />
        <OrderCards/>
    </div>
  );
}
