import { title } from "@/components/primitives";
// import Sidebar from "@/components/sidebar";
import TableMenu from "./TableMenu"; // Import the client-side component
import TopContent from "@/components/top-content";
import MenuCards from "./menuCards";
import { OrderDetails } from "./ordersDetails";
import { CartProvider } from "./cartContext";

export default function AboutPage() {
  
  return (
    <div className="w-full h-screen bg-slate-50 flex flex-col">
      <CartProvider>
        <TopContent />
        {/* <TableMenu /> */}
        <div className="flex overflow-y-auto">
          <div className="flex-1  flex flex-row">
            <MenuCards />
          </div>
          <div className="flex flex-col">
            <OrderDetails/>
          </div>
        </div>
      </CartProvider>
    </div>
  );
}
