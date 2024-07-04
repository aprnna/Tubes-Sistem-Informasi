"use client";
import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";

export default function MenuCards(){
    const [menu, setMenu] = useState([]);

    async function getMenu() {
        const {data} = await fetchApi("/menu", "GET");

        setMenu(data);
    }

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <div className="flex flex-wrap items-center justify-around p-12 gap-8">
            {menu.map((item:any) => (
                <div key={item.id} className="flex drop-shadow-md">
                    <div className="flex flex-col bg-white w-[280px] h-auto p-6 rounded-lg items-center gap-4 hover:bg-red-100 transition-all duration-300 cursor-pointer">
                        <img alt={item.nama} className="border w-full h-auto max-h-[270px] min-h-[270px] rounded-xl" src={item.foto} />
                        <div className="flex flex-col justify-center items-center gap-1">
                            <h1>{item.nama}</h1>
                            <p className="text-2xl font-bold">Rp. {item.harga}</p>
                        </div>
                    </div>
                </div>
            ))}         
        </div>
    )
}