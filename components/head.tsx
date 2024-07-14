'use client'

import React, {useState} from "react";
import { usePathname } from 'next/navigation';

interface HeadProps {
    tambahButton?: boolean;
}

export default function Head({ tambahButton = false }: HeadProps){
    const pathname = usePathname();

    console.log(pathname);

    const pathTitles: { [key: string]: string } = {
        '/': 'Home',
        '/menu': 'Manajemen Menu',
        '/pesanan': 'Pesanan',
        '/pesanan/add': 'Menu',
        '/pesanan/ongoing': 'Pesanan Diproses',
      };

    const currentTitle = pathTitles[pathname] || 'Menu';

    return(
        <>
            <div className="flex text-4xl font-bold py-4 px-12 justify-between ">
                <h1>{currentTitle}</h1>
                {tambahButton && (
                    <button className="text-lg font-normal bg-amber-900 hover:bg-amber-950 text-slate-50 px-8 rounded-lg transition-all duration-300">
                        Tambah Menu
                    </button>
                )}
            </div>
            <div className="min-w-96 border-t-2 border-dashed border-gray-400 mb-4  " />
        </>
    )
}