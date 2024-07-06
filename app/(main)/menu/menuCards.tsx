"use client";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";
import { useCart} from "./cartContext";

export default function MenuCards(){
    const [menu, setMenu] = useState([]);
    // const [cart, setCart] = useState<{ [key: number]: number }>({});
    const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();

    async function getMenu() {
        const {data} = await fetchApi("/menu", "GET");

        setMenu(data);
    }

    useEffect(() => {
        getMenu();
    }, []);

    useEffect(() => {
        console.log("Cart updated:", cart);
    }, [cart]);

    // const addToCart = (id: number) => {
    //     console.log("Added menu id:", id);
    //     setCart((prevCart) => ({
    //       ...prevCart,
    //       [id]: 1,
    //     }));
        
    //   };
    
    //   const increaseQuantity = (id: number) => {
    //     setCart((prevCart) => ({
    //         ...prevCart,
    //         [id]: prevCart[id] + 1,
    //     }));
    //     console.log("Added menu id:", cart);
    //   };
    
    //   const decreaseQuantity = (id: number) => {
    //     setCart((prevCart) => {
    //       const newQuantity = prevCart[id] - 1;

    //       if (newQuantity > 0) {
    //         return { ...prevCart, [id]: newQuantity };
    //       } else {
    //         const { [id]: _, ...rest } = prevCart;

    //         return rest;
    //       }
    //     });
    //     console.log("Added menu id:", cart);
    //   };

    return (
        <div className="flex flex-wrap items-center justify-around p-12 gap-8">
          {menu.map((item: any) => (
            <div key={item.id} className="flex drop-shadow-md">
              <div className="flex flex-col bg-white w-[280px] h-auto p-6 rounded-lg items-center gap-4 hover:bg-red-100 transition-all duration-300">
                <img alt={item.nama} className="border w-full h-auto max-h-[270px] min-h-[270px] rounded-xl" src={item.foto} />
                <div className="flex flex-col justify-center items-center gap-1">
                  <h1>{item.nama}</h1>
                  <p className="text-2xl font-bold">Rp. {item.harga}</p>
                </div>
                {cart.find(cartItem => cartItem.id === item.id) ? (
                  <div className="flex items-center gap-3 w-max justify-center bg-white rounded-full">
                    <button
                      className="bg-amber-950 hover:bg-amber-900 text-white p-2 rounded-full"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <img alt="minus" src="./minus.svg" />    
                    </button>
                    <span className="w-max min-w-10 p-2 px-4 text-center">
                      {cart.find(cartItem => cartItem.id === item.id)?.quantity}
                    </span>
                    <button
                      className="bg-amber-950 hover:bg-amber-900 text-white p-2 rounded-full"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <img alt="plus" src="./add.svg" />
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-amber-950 hover:bg-amber-900 text-slate-50 py-3 rounded-xl cursor-pointer transition-all duration-300 w-full"
                    onClick={() => addToCart({ id: item.id, nama: item.nama, harga: item.harga, foto: item.foto, quantity: 1 })}
                  >
                    Tambahkan Menu
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      );
}