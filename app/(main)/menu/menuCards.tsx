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
                    <div className="flex flex-col bg-white w-[250px] h-auto p-6 rounded-lg items-center gap-4">
                        <img alt={item.nama} className="border w-full h-[250px] border-amber-800 rounded-xl" src={item.foto} />
                        <h1>{item.nama}</h1>
                    </div>
                </div>
            ))}         
        </div>
    )
}