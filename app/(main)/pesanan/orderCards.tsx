'use client'

import { useEffect, useState } from "react";
import fetchApi from "@/utils/fetchApi";

export default function OrderCards() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getOrders() {
        setLoading(true);
        const { data } = await fetchApi("/pesanan/ongoing", "GET");

        setOrders(data);
        setLoading(false);
    }

    useEffect(() => {
        getOrders();
    }, []);

    function formatID(id: number): string {
        const prefix = "NT";
        const paddedID = id.toString().padStart(6, '0');

        return `${prefix}${paddedID}`;
    }

    return (
        <div className={`flex flex-wrap items-center justify-around p-12 gap-6  ${loading ? 'w-full' : 'w-auto'}`}>
            {loading ? (
                <div className="flex flex-col items-center justify-center p-10 w-full h-full">
                    <img alt="Loading..." className="max-w-14" src="/loading1.gif" />
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    {orders.map((order: any, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-full md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 3xl:w-1/7 rounded-2xl bg-white shadow-lg p-4">
                            <div className="flex flex-rows items-center justify-between w-full rounded-lg px-4">
                                <h1 className="text-lg font-bold text-gray-800">{order.atasNama}</h1>
                                <p className="text-lg font-semibold text-gray-800">#{formatID(order.id)}</p>
                            </div>
                            <div className="w-full border-t-2 border-dashed border-gray-400 my-4" />
                            <button className="bg-amber-900 text-slate-50 text-lg py-2 w-full rounded-xl hover:bg-amber-950 transition-all duration-300">
                                Cek Pesanan
                            </button>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}
